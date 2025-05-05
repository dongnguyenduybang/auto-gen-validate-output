import { Element } from '../enums/element.enum';
import { Operator } from '../enums/operator.enum';
import { IContext } from './text-context';

export interface ValidationError {
  path: string;
  expected: string;
  actual: any;
  message?: string;
}

interface OperatorConfig {
  field?: string;
  operator: Operator;
  element?: Element;
  expect: any;
}

export const createApiValidator = (context: IContext) => {
  const comparedValue = (a: any, b: any): boolean => {
    if (typeof b === 'string' && b.startsWith('{{')) {
      const path = b.replace(/[{}]/g, '').split('.');
      b = context.getValue(path);
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      return (
        a.length === b.length &&
        a.every((item, i) => String(item).trim() === String(b[i]).trim())
      );
    }
    return String(a).trim() === String(b).trim();
  };

  function getNestedValue(obj: any, pathStr: string): any[] {
    const parts = pathStr.split('.');
    let current = Array.isArray(obj) ? obj.flat(Infinity) : [obj];

    for (const part of parts) {
      current = current.flatMap((item) => {
        if (item === undefined || item === null) return [];

        if (Array.isArray(item)) {
          return item.flatMap((i) => {
            const val = i?.[part];
            return val !== undefined
              ? Array.isArray(val)
                ? val.flat(Infinity)
                : [val]
              : [];
          });
        }

        const val = item[part];
        return val !== undefined
          ? Array.isArray(val)
            ? val.flat(Infinity)
            : [val]
          : [];
      });
    }

    const result = current
      .flat(Infinity)
      .filter((val) => val !== undefined && val !== null);
    return result;
  }

  const resolveValue = (value: any): any => {
    if (typeof value === 'string') {
      return value.replace(/\{\{(.+?)\}\}/g, (_, path) => {
        const pathArray = path.split('.');
        const resolved = context.getValue(pathArray);
        return resolved ?? `{{${path}}}`;
      });
    }
    if (Array.isArray(value)) {
      return value.map((item) => resolveValue(item));
    }
    if (typeof value === 'object' && value !== null) {
      return Object.fromEntries(
        Object.entries(value).map(([key, val]) => [key, resolveValue(val)]),
      );
    }
    return value;
  };

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

  const validateOperatorRules = (
    config: OperatorConfig,
    actualValue: any,
    path: string[],
    errors: ValidationError[],
    parentType: 'object' | 'array'
  ) => {
    // Rule 1: Object properties must use EQUAL
    if (parentType === 'object' && config.operator === Operator.INCLUDE) {
      errors.push(
        createError(
          path,
          `Object property '${path.join('.')}' must use EQUAL operator, not INCLUDE`,
          actualValue
        )
      );
      return false;
    }

    // Rule 2: Array elements must use INCLUDE
    if (parentType === 'array' && config.operator === Operator.EQUAL) {
      errors.push(
        createError(
          path,
          `Array element '${path.join('.')}' must use INCLUDE operator, not EQUAL`,
          actualValue
        )
      );
      return false;
    }

    // Rule 3: INCLUDE in arrays requires element
    if (config.operator === Operator.INCLUDE && parentType === 'array' && !config.element) {
      errors.push(
        createError(
          path,
          `INCLUDE operator for array element '${path.join('.')}' requires element (ALL, FIRST, LAST)`,
          actualValue
        )
      );
      return false;
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
      if (!comparedValue(actual, expected)) {
        errors.push(
          createError(path, expected, actual),
        );
      }
      return;
    }

    if (!Array.isArray(actual)) {
      errors.push(
        createError(
          path,
          `Expected array for element type '${elementType}'`,
          actual,
        ),
      );
      return;
    }

    switch (elementType) {
      case Element.ALL:
        if (!actual.every((item) => comparedValue(item, expected))) {
          errors.push(
            createError(
              path,
              `All elements must equal ${JSON.stringify(expected)}`,
              actual,
            ),
          );
        }
        break;
      case Element.FIRST:
        if (actual.length === 0 || !comparedValue(actual[0], expected)) {
          errors.push(
            createError(
              path,
              `First element must equal ${JSON.stringify(expected)}`,
              actual,
            ),
          );
        }
        break;
      case Element.LAST:
        if (
          actual.length === 0 ||
          !comparedValue(actual[actual.length - 1], expected)
        ) {
          errors.push(
            createError(
              path,
              `Last element must equal ${JSON.stringify(expected)}`,
              actual,
            ),
          );
        }
        break;
    }
  };

  const validateInclusion = (
    actual: any,
    expectedValues: any,
    elementType: Element | undefined,
    path: string[],
    errors: ValidationError[],
  ) => {
    const normalizedActual = Array.isArray(actual)
      ? actual.flat(Infinity)
      : [actual];
    const expectedArray = Array.isArray(expectedValues)
      ? expectedValues.flat(Infinity)
      : [expectedValues];

    // Special handling for ALL elements
    if (elementType === Element.ALL) {
      if (normalizedActual.length !== expectedArray.length) {
        errors.push(
          createError(
            path,
            expectedArray,
            normalizedActual
          )
        );
        return;
      }

      const missingInActual = expectedArray.filter(
        expected => !normalizedActual.some(actual => comparedValue(actual, expected))
      );

      const missingInExpected = normalizedActual.filter(
        actual => !expectedArray.some(expected => comparedValue(actual, expected))
      );

      if (missingInActual.length > 0 || missingInExpected.length > 0) {
        let message = `Element.ALL validation failed: `;
        if (missingInActual.length > 0) {
          message += `Missing expected values: ${missingInActual.join(', ')}. `;
        }
        if (missingInExpected.length > 0) {
          message += `Unexpected values: ${missingInExpected.join(', ')}`;
        }
        errors.push(createError(path, message.trim(), normalizedActual));
        return;
      }
      return;
    }

    let valuesToCheck = normalizedActual;
    switch (elementType) {
      case Element.FIRST:
        valuesToCheck = valuesToCheck.slice(0, 1);
        break;
      case Element.LAST:
        valuesToCheck = valuesToCheck.slice(-1);
        break;
      default:
        break;
    }

    if (valuesToCheck.length === 0) {
      errors.push(
        createError(
          path,
          `No values found at path '${path.join('.')}'`,
          valuesToCheck,
        ),
      );
      return;
    }

    const missing = expectedArray.filter(
      (expected) => !valuesToCheck.some((val) => comparedValue(val, expected)),
    );

    if (missing.length > 0) {
      const message = elementType
        ? `${elementType} elements of ${path.join('.')} must include ${missing.join(', ')}`
        : `${path.join('.')} must expected ${missing.join(', ')}`;
      errors.push(createError(path, message, valuesToCheck));
    }
  };

  const validateOperatorObject = (
    actual: any,
    config: OperatorConfig,
    path: string[],
    errors: ValidationError[],
    parentType: 'object' | 'array' = 'object' // Default to object
  ) => {
    const { field, operator, element, expect } = config;
    const resolvedExpect = resolveValue(expect);

    if (field && field.includes('.')) {
      const fieldParts = field.split('.');
      const targetValues = getNestedValue(actual, field);
      validateFieldValues(
        targetValues,
        { ...config, field: fieldParts[fieldParts.length - 1] },
        [...path, ...fieldParts],
        errors,
        parentType
      );
      return;
    }

    const targetValue = field ? getNestedValue(actual, field) : actual;

    // Validate operator rules first
    if (!validateOperatorRules(config, targetValue, path, errors, parentType)) {
      return;
    }

    if (element && !Array.isArray(targetValue)) {
      errors.push(
        createError(
          path,
          `Expected array for element validation but got ${typeof targetValue}`,
          targetValue,
        ),
      );
      return;
    }

    const processedExpect =
      operator === Operator.INCLUDE && !Array.isArray(resolvedExpect)
        ? [resolvedExpect]
        : resolvedExpect;

    switch (operator) {
      case Operator.INCLUDE:
        validateInclusion(targetValue, processedExpect, element, path, errors);
        break;
      case Operator.EQUAL:
        validateEquality(targetValue, processedExpect, element, path, errors);
        break;
      default:
        errors.push(
          createError(path, `Unknown operator: ${operator}`, targetValue),
        );
    }
  };

  const isOperatorObject = (obj: any): boolean => {
    return (
      obj && typeof obj === 'object' && 'operator' in obj && 'expect' in obj
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

    for (const [key, expectedValue] of Object.entries(expected)) {
      if (isOperatorObject(expectedValue)) {
        const targetValue = actual[key];
        validateOperatorObject(
          targetValue,
          expectedValue as OperatorConfig,
          [...path, key],
          errors,
          'object'
        );
      } else {
        validateRecursive(actual[key], expectedValue, [...path, key], errors);
      }
    }
  };

  const validateArray = (
    actual: any[],
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
          'array'
        );
      });
      return;
    }

    expected.forEach((expectedItem, index) => {
      const itemPath = [...path, `[${index}]`];
      validateRecursive(actual[index], expectedItem, itemPath, errors);
    });
  };

  const validateFieldValues = (
    values: any[],
    rule: OperatorConfig,
    path: string[],
    errors: ValidationError[],
    parentType: 'object' | 'array'
  ) => {
    const resolvedExpect = resolveValue(rule.expect);

    if (!validateOperatorRules(rule, values, path, errors, parentType)) {
      return;
    }

    switch (rule.operator) {
      case Operator.INCLUDE:
        validateInclusion(values, resolvedExpect, rule.element, path, errors);
        break;
      case Operator.EQUAL:
        validateEquality(values, resolvedExpect, rule.element, path, errors);
        break;
      default:
        errors.push(
          createError(path, `Unknown operator: ${rule.operator}`, values),
        );
    }
  };

  const validateRecursive = (
    actual: any,
    expected: any,
    path: string[],
    errors: ValidationError[],
  ) => {
    if (isOperatorObject(expected)) {
      validateOperatorObject(actual, expected as OperatorConfig, path, errors);
    } else if (typeof expected === 'object' && expected !== null) {
      if (Array.isArray(expected)) {
        validateArray(actual, expected, path, errors);
      } else {
        validateObject(actual, expected, path, errors);
      }
    } else if (typeof expected === 'string') {
      if (!comparedValue(actual, expected)) {
        errors.push(
          createError(path, expected, actual),
        );
      }
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