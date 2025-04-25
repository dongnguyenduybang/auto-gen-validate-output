/* eslint-disable prettier/prettier */
import { Element } from '../enums/element.enum';
import { Operator } from '../enums/operator.enum';
import { IContext, TestContext, WSSContext } from './text-context';

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
      return a.length === b.length && a.every((item, i) => String(item).trim() === String(b[i]).trim());
    }
    return String(a).trim() === String(b).trim();
  };

  function getNestedValue(obj: any, pathStr: string): any[] {
    console.log(`getNestedValue: path=${pathStr}, obj=`, JSON.stringify(obj, null, 2));
    const parts = pathStr.split('.');
    let current = Array.isArray(obj) ? obj.flat(Infinity) : [obj];

    for (const part of parts) {
      current = current.flatMap(item => {
        if (item === undefined || item === null) return [];

        if (Array.isArray(item)) {
          return item.flatMap(i => {
            const val = i?.[part];
            return val !== undefined ? (Array.isArray(val) ? val.flat(Infinity) : [val]) : [];
          });
        }

        const val = item[part];
        return val !== undefined ? (Array.isArray(val) ? val.flat(Infinity) : [val]) : [];
      });
    }

    const result = current.flat(Infinity).filter(val => val !== undefined && val !== null);
    console.log(`getNestedValue result:`, JSON.stringify(result));
    return result;
  }

  const resolveValue = (value: any): any => {
    if (typeof value === 'string') {
      return value.replace(/\{\{(.+?)\}\}/g, (_, path) => {
        const pathArray = path.split('.');
        const resolved = context.getValue(pathArray);
        console.log(`Resolving template: ${path} => ${resolved}`);
        return resolved ?? `{{${path}}}`;
      });
    }
    if (Array.isArray(value)) {
      return value.map(item => resolveValue(item));
    }
    if (typeof value === 'object' && value !== null) {
      return Object.fromEntries(
        Object.entries(value).map(([key, val]) => [key, resolveValue(val)])
      );
    }
    return value;
  };

  const createError = (
    path: string[],
    expected: any,
    actual: any,
    message?: string
  ): ValidationError => ({
    path: path.join('.'),
    expected: typeof expected === 'string' ? expected : JSON.stringify(expected),
    actual: JSON.stringify(actual),
    message: message || `Validation failed at ${path.join('.')}`
  });

  const validateEquality = (
    actual: any,
    expected: any,
    elementType: Element | undefined,
    path: string[],
    errors: ValidationError[]
  ) => {
    if (!elementType) {
      if (!comparedValue(actual, expected)) {
        errors.push(createError(
          path,
          `equal(${JSON.stringify(expected)})`,
          actual
        ));
      }
      return;
    }

    if (!Array.isArray(actual)) {
      errors.push(createError(
        path,
        `Expected array for element type '${elementType}'`,
        actual
      ));
      return;
    }

    switch (elementType) {
      case Element.ALL:
        if (!actual.every(item => comparedValue(item, expected))) {
          errors.push(createError(
            path,
            `All elements must equal ${JSON.stringify(expected)}`,
            actual
          ));
        }
        break;
      case Element.FIRST:
        if (actual.length === 0 || !comparedValue(actual[0], expected)) {
          errors.push(createError(
            path,
            `First element must equal ${JSON.stringify(expected)}`,
            actual
          ));
        }
        break;
      case Element.LAST:
        if (actual.length === 0 || !comparedValue(actual[actual.length - 1], expected)) {
          errors.push(createError(
            path,
            `Last element must equal ${JSON.stringify(expected)}`,
            actual
          ));
        }
        break;
    }
  };

  const validateInclusion = (
    actual: any,
    expectedValues: any,
    elementType: Element | undefined,
    path: string[],
    errors: ValidationError[]
  ) => {
    console.log(`validateInclusion: actual=`, JSON.stringify(actual, null, 2));
    const normalizedActual = Array.isArray(actual) ? actual.flat(Infinity) : [actual];
    const expectedArray = Array.isArray(expectedValues) ? expectedValues.flat(Infinity) : [expectedValues];

    const fullPath = path.join('.');

    let valuesToCheck = normalizedActual;

    console.log('Validate inclusion debug:', {
      path: fullPath,
      actual: JSON.stringify(normalizedActual),
      targetValues: JSON.stringify(valuesToCheck),
      expectedValues: JSON.stringify(expectedArray),
      elementType
    });

    switch (elementType) {
      case Element.FIRST:
        valuesToCheck = valuesToCheck.slice(0, 1);
        break;
      case Element.LAST:
        valuesToCheck = valuesToCheck.slice(-1);
        break;
      case Element.ALL:
      default:
        break;
    }

    if (valuesToCheck.length === 0) {
      errors.push(createError(
        path,
        `No values found at path '${fullPath}'`,
        valuesToCheck
      ));
      return;
    }

    const missing = expectedArray.filter(expected =>
      !valuesToCheck.some(val => comparedValue(val, expected))
    );

    if (missing.length > 0) {
      const message = elementType
        ? `${elementType} elements of ${fullPath} must include ${missing.join(', ')}`
        : `${fullPath} must include ${missing.join(', ')}`;
      errors.push(createError(
        path,
        message,
        valuesToCheck
      ));
    }
  };

  const validateOperatorObject = (
    actual: any,
    config: OperatorConfig,
    path: string[],
    errors: ValidationError[]
  ) => {
    const { field, operator, element, expect } = config;
    const resolvedExpect = resolveValue(expect);

    console.log('Validating operator object:', {
      field,
      operator,
      element,
      actual: JSON.stringify(actual),
      resolvedExpect
    });

    if (field && field.includes('.')) {
      const fieldParts = field.split('.');
      const targetValues = getNestedValue(actual, field);
      validateFieldValues(targetValues, { ...config, field: fieldParts[fieldParts.length - 1] }, [...path, ...fieldParts], errors);
      return;
    }

    const targetValue = field ? getNestedValue(actual, field) : actual;

    if (element && !Array.isArray(targetValue)) {
      errors.push(createError(
        path,
        `Expected array for element validation but got ${typeof targetValue}`,
        targetValue
      ));
      return;
    }

    const processedExpect = operator === Operator.INCLUDE && !Array.isArray(resolvedExpect)
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
        errors.push(createError(path, `Unknown operator: ${operator}`, targetValue));
    }
  };

  const isOperatorObject = (obj: any): boolean => {
    return obj && typeof obj === 'object' && 'operator' in obj && 'expect' in obj;
  };

  const validateObject = (
    actual: Record<string, any>,
    expected: Record<string, any>,
    path: string[],
    errors: ValidationError[]
  ) => {
    if (typeof actual !== 'object' || actual === null) {
      errors.push(createError(path, 'Expected object', actual));
      return;
    }

    for (const [key, expectedValue] of Object.entries(expected)) {
      validateRecursive(actual[key], expectedValue, [...path, key], errors);
    }
  };

  const validateArray = (
    actual: any[],
    expected: any[],
    path: string[],
    errors: ValidationError[]
  ) => {
    if (!Array.isArray(actual)) {
      errors.push(createError(path, 'Expected array', actual));
      return;
    }

    if (expected.every(item => isOperatorObject(item))) {
      expected.forEach(rule => {
        const fieldValues = actual.map(item =>
          getNestedValue(item, (rule as OperatorConfig).field)
        ).flat(Infinity);
        
        validateFieldValues(fieldValues, rule as OperatorConfig, [(rule as OperatorConfig).field], errors);
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
    errors: ValidationError[]
  ) => {
    const resolvedExpect = resolveValue(rule.expect);

    switch (rule.operator) {
      case Operator.INCLUDE:
        validateInclusion(values, resolvedExpect, rule.element, path, errors);
        break;
      case Operator.EQUAL:
        validateEquality(values, resolvedExpect, rule.element, path, errors);
        break;
      default:
        errors.push(createError(path, `Unknown operator: ${rule.operator}`, values));
    }
  };

  const validateRecursive = (
    actual: any,
    expected: any,
    path: string[],
    errors: ValidationError[]
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
        errors.push(createError(
          path,
          `equal(${JSON.stringify(expected)})`,
          actual
        ));
      }
    }
  };

  const normalizeData = (data: any): any => {
    if (Array.isArray(data)) {
      return data.flatMap(item => normalizeData(item));
    }
    if (typeof data === 'object' && data !== null) {
      return Object.fromEntries(
        Object.entries(data).map(([key, val]) => [key, normalizeData(val)])
      );
    }
    return data;
  };

  return {
    validate: (actualData: any, expectConfig: any): ValidationError[] => {
      console.log(`Validating actualData:`, JSON.stringify(actualData, null, 2));
      const errors: ValidationError[] = [];
      const normalizedData = normalizeData(actualData);
      validateRecursive(actualData, expectConfig, [], errors);
      return errors;
    }
  };
};