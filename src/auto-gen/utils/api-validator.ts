import { Element } from '../enums/element.enum';
import { Operator } from '../enums/operator.enum';
import { IContext, ValidationError } from './declarations';
import { comparedValue, getNestedValue, isOperatorObject, resolveValue } from './helper';

interface OperatorConfig {
  field?: string;
  operator: Operator;
  element?: Element;
  expect: any;
}

export const createApiValidator = (context: IContext) => {
  // Helper functions

  const createError = (
    path: string[],
    expected: any,
    actual: any,
    message?: string,
  ): ValidationError => ({
    path: path.join('.'),
    expected: typeof expected === 'string' ? expected : JSON.stringify(expected),
    actual: JSON.stringify(actual),
    message: message || `Validation failed at ${path.join('.')}`,
  });

  // Validation functions
  const validateOperatorRules = (
    config: OperatorConfig,
    actualValue: any,
    path: string[],
    errors: ValidationError[],
    parentType: 'object' | 'array',
  ): boolean => {
    const rules = [
      {
        condition: parentType === 'object' && config.operator === Operator.INCLUDE,
        message: `Object property '${path.join('.')}' must use EQUAL operator, not INCLUDE`
      },
      {
        condition: parentType === 'array' && config.operator === Operator.EQUAL,
        message: `Array element '${path.join('.')}' must use INCLUDE operator, not EQUAL`
      },
      {
        condition: config.operator === Operator.INCLUDE && parentType === 'array' && !config.element,
        message: `INCLUDE operator for array element '${path.join('.')}' requires element (ALL, FIRST, LAST)`
      }
    ];

    for (const rule of rules) {
      if (rule.condition) {
        errors.push(createError(path, rule.message, actualValue));
        return false;
      }
    }
    return true;
  };

  const validateEquality = (
    actual: any,
    expected: any,
    elementType: Element | undefined,
    path: string[],
    errors: ValidationError[],
  ) => {
    if (!elementType) {
      if (!comparedValue(actual, expected, context)) {
        errors.push(createError(path, expected, actual));
      }
      return;
    }

    if (!Array.isArray(actual)) {
      errors.push(createError(path, `Expected array for element type '${elementType}'`, actual));
      return;
    }

    const validators = {
      [Element.ALL]: () => {
        if (!actual.every((item) => comparedValue(item, expected, context))) {
          errors.push(createError(path, `All elements must equal ${JSON.stringify(expected)}`, actual));
        }
      },
      [Element.FIRST]: () => {
        if (actual.length === 0 || !comparedValue(actual[0], expected, context)) {
          errors.push(createError(path, `First element must equal ${JSON.stringify(expected)}`, actual));
        }
      },
      [Element.LAST]: () => {
        if (actual.length === 0 || !comparedValue(actual[actual.length - 1], expected, context)) {
          errors.push(createError(path, `Last element must equal ${JSON.stringify(expected)}`, actual));
        }
      }
    };

    if (validators[elementType]) {
      validators[elementType]();
    }
  };

  const validateInclusion = (
    actual: string[],
    expectedValues: string[],
    elementType: Element,
    path: string[],
    errors: ValidationError[],
  ) => {
    const normalizedActual = Array.isArray(actual) ? actual.flat(Infinity) : [actual];
    const expectedArray = Array.isArray(expectedValues) ? expectedValues.flat(Infinity) : [expectedValues];

    if (elementType === Element.ALL) {
      return validateAllElementsInclusion(normalizedActual, expectedArray, path, errors);
    }

    const valuesToCheck = getValuesToCheck(normalizedActual, elementType);
    if (valuesToCheck.length === 0) {
      errors.push(createError(path, `No values found at path '${path.join('.')}'`, valuesToCheck));
      return;
    }

    const missing = expectedArray.filter(
      (expected) => !valuesToCheck.some((val) => comparedValue(val, expected, context)),
    );

    if (missing.length > 0) {
      const message = elementType
        ? `${elementType} elements of ${path.join('.')} must include ${missing.join(', ')}`
        : `${path.join('.')} must expected ${missing.join(', ')}`;
      errors.push(createError(path, message, valuesToCheck));
    }
  };

  const validateAllElementsInclusion = (
    actual: any[],
    expected: any[],
    path: string[],
    errors: ValidationError[],
  ) => {
    if (actual.length !== expected.length) {
      errors.push(createError(path, expected, actual));
      return;
    }

    const missingInActual = expected.filter(
      (expected) => !actual.some((val) => comparedValue(val, expected, context)),
    );

    const missingInExpected = actual.filter(
      (val) => !expected.some((expected) => comparedValue(val, expected, context)),
    );

    if (missingInActual.length > 0 || missingInExpected.length > 0) {
      let message = `Element.ALL validation failed: `;
      if (missingInActual.length > 0) {
        message += `Missing expected values: ${missingInActual.join(', ')}. `;
      }
      if (missingInExpected.length > 0) {
        message += `Unexpected values: ${missingInExpected.join(', ')}`;
      }
      errors.push(createError(path, message.trim(), actual));
    }
  };

  const getValuesToCheck = (values: any[], elementType: Element): any[] => {
    console.log(values)
    console.log(values.slice(0, 1))
    switch (elementType) {
      case Element.FIRST: return values.slice(0, 1);
      case Element.LAST: return values.slice(-1);
      default: return values;
    }
  };

  const validateOperatorObject = (
    actual: any,
    config: OperatorConfig,
    path: string[],
    errors: ValidationError[],
    parentType: 'object' | 'array' = 'object',
  ) => {
    const { field, operator, element, expect } = config;
    const resolvedExpect = resolveValue(expect, context);

    if (field && field.includes('.')) {
      handleNestedField(actual, config, path, errors, parentType);
      return;
    }

    const targetValue = field ? getNestedValue(actual, field) : actual;

    if (!validateOperatorRules(config, targetValue, path, errors, parentType)) {
      return;
    }

    if (element && !Array.isArray(targetValue)) {
      errors.push(createError(
        path,
        `Expected array for element validation but got ${typeof targetValue}`,
        targetValue,
      ));
      return;
    }

    const processedExpect = operator === Operator.INCLUDE && !Array.isArray(resolvedExpect)
      ? [resolvedExpect]
      : resolvedExpect;

    if (operator === Operator.INCLUDE) {
      validateInclusion(targetValue, processedExpect, element, path, errors);
    } else if (operator === Operator.EQUAL) {
      validateEquality(targetValue, processedExpect, element, path, errors);
    } else {
      errors.push(createError(path, `Unknown operator: ${operator}`, targetValue));
    }
  };

  const handleNestedField = (
    actual: any,
    config: OperatorConfig,
    path: string[],
    errors: ValidationError[],
    parentType: 'object' | 'array',
  ) => {
    const fieldParts = config.field.split('.');
    const targetValues = getNestedValue(actual, config.field);
    validateFieldValues(
      targetValues,
      { ...config, field: fieldParts[fieldParts.length - 1] },
      [...path, ...fieldParts],
      errors,
      parentType,
    );
  };


  const validateObject = (
    actual: Record<string, any>,
    expected: Record<string, any>,
    path: string[],
    errors: ValidationError[],
  ) => {
    if (typeof actual !== 'object' || actual === null) {
      errors.push(createError(path, 'Expected object', actual));
      return;
    }

    Object.entries(expected).forEach(([key, expectedValue]) => {
      if (isOperatorObject(expectedValue)) {
        validateOperatorObject(
          actual[key],
          expectedValue as OperatorConfig,
          [...path, key],
          errors,
          'object',
        );
      } else {
        validateRecursive(actual[key], expectedValue, [...path, key], errors);
      }
    });
  };

  const validateArray = (
    actual: unknown,
    expected: any[],
    path: string[],
    errors: ValidationError[],
  ) => {
    if (!Array.isArray(actual)) {
      errors.push(createError(path, 'Expected array', actual));
      return;
    }

    if (expected.every((item) => isOperatorObject(item))) {
      expected.forEach((rule) => {
        const fieldValues = actual
          .map((item) => getNestedValue(item, (rule as OperatorConfig).field))
          .flat(Infinity);

        validateFieldValues(
          fieldValues,
          rule as OperatorConfig,
          [...path, (rule as OperatorConfig).field],
          errors,
          'array',
        );
      });
      return;
    }

    expected.forEach((expectedItem, index) => {
      validateRecursive(actual[index], expectedItem, [...path, `[${index}]`], errors);
    });
  };

  const validateFieldValues = (
    values: any[],
    rule: OperatorConfig,
    path: string[],
    errors: ValidationError[],
    parentType: 'object' | 'array',
  ) => {
    const resolvedExpect = resolveValue(rule.expect, context);

    if (!validateOperatorRules(rule, values, path, errors, parentType)) {
      return;
    }

    if (rule.operator === Operator.INCLUDE) {
      validateInclusion(values, resolvedExpect, rule.element, path, errors);
    } else if (rule.operator === Operator.EQUAL) {
      validateEquality(values, resolvedExpect, rule.element, path, errors);
    } else {
      errors.push(createError(path, `Unknown operator: ${rule.operator}`, values));
    }
  };

  const validateRecursive = (
    actual: unknown,
    expected: any,
    path: string[],
    errors: ValidationError[],
  ) => {

    if (isOperatorObject(expected)) {
      validateOperatorObject(actual, expected as OperatorConfig, path, errors);
    } else if (typeof expected === 'object' && expected !== null) {
      Array.isArray(expected)
        ? validateArray(actual, expected, path, errors)
        : validateObject(actual, expected, path, errors);
    } else if (typeof expected === 'string' && !comparedValue(actual, expected, context)) {
      errors.push(createError(path, expected, actual));
    }
  };

  return {
    validate: (actualData: any, expectConfig: any): ValidationError[] => {
      const errors: ValidationError[] = [];
      validateRecursive(actualData, expectConfig, [], errors);
      return errors;
    },
  };
};