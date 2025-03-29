/* eslint-disable prettier/prettier */
import { TestContext } from './text-context';

export interface ValidationError {
  path: string;
  expected: string;
  actual: any;
  message?: string;
}

interface OperatorConfig {
  operator: string;
  expect: any;
  element?: 'all' | 'first' | 'last';
  field?: string;
}

interface ValidationOptions {
  strictTypes?: boolean;
  allowOptionalArrays?: boolean;
}

export const createApiValidator = (
  context: TestContext,
  options: ValidationOptions = { strictTypes: true, allowOptionalArrays: false }
) => {
  //đệ quye so sánh excpect & acutal
  const comparedValue = (a: any, b: any): boolean => {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (typeof a !== 'object' || a === null || b === null) return a === b;

    const keyA = Object.keys(a);
    const keYb = Object.keys(b);
    if (keyA.length !== keYb.length) return false;

    return keyA.every(key => comparedValue(a[key], b[key]));
  };

  const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((context, key) =>context?.[key], obj);
  };

  const resolveValue = (value: any): any => {
    if (typeof value === 'string') {
      return value.replace(/\{\{(.+?)\}\}/g, (_, path) =>
        context.getValue(path.split('.')) ?? `{{${path}}}`
      );
    }
    if (Array.isArray(value)) return value.map(item => resolveValue(item));
    if (typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([a, b]) => [a, resolveValue(b)])
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

  const validateArrayEquality = (
    actualArray: any[],
    expected: any,
    elementType: string,
    path: string[],
    errors: ValidationError[],
  ) => {
    switch (elementType) {
      case 'all':
        if (!actualArray.every(item => comparedValue(item, expected))) {
          errors.push(createError(
            path,
            `All elements must equal ${JSON.stringify(expected)}`,
            actualArray
          ));
        }
        break;
      case 'first':
        if (actualArray.length === 0) {
          errors.push(createError(
            path,
            `Array is empty, first element must equal ${JSON.stringify(expected)}`,
            actualArray
          ));
        } else if (!comparedValue(actualArray[0], expected)) {
          errors.push(createError(
            path,
            `First element must equal ${JSON.stringify(expected)}`,
            actualArray
          ));
        }
        break;
        case 'last':
          if (actualArray.length === 0) {
            errors.push(createError(
              path,
              `Array is empty, last element must equal ${JSON.stringify(expected)}`,
              actualArray
            ));
          } else if (!comparedValue(actualArray.length -1, expected)) {
            errors.push(createError(
              path,
              `Last element must equal ${JSON.stringify(expected)}`,
              actualArray
            ));
          }
          break;
        
    }
  };

  const validateEquality = (
    actual: any,
    expected: any,
    elementType: string | undefined,
    path: string[],
    errors: ValidationError[],
  ) => {
    const arrayElementTypes = ['all', 'first', 'last'];
    
    if (elementType && arrayElementTypes.includes(elementType)) {
      if (!Array.isArray(actual)) {
        errors.push(createError(
          path,
          `Expected array for element type '${elementType}'`,
          actual
        ));
        return;
      }
      validateArrayEquality(actual, expected, elementType, path, errors);
    } else if (!comparedValue(actual, expected)) {
      errors.push(createError(
        path,
        `equal(${JSON.stringify(expected)})`,
        actual
      ));
    }
  };
  const validateInclusion = (
    actual: any,
    expectedValues: any[],
    elementType: string | undefined,
    path: string[],
    errors: ValidationError[],
  ) => {
    if (!Array.isArray(actual)) {
      errors.push(createError(path, 'Expected array', actual));
      return;
    }

    if (elementType === 'first') {
      if (actual.length === 0) {
        errors.push(createError(
          path,
          `Expected non-array to check first element`,
          actual
        ));
      } else {
        const firstElement = actual[0];
        if (!expectedValues.some(ev => comparedValue(firstElement, ev))) {
          errors.push(createError(
            path,
            `First element ${JSON.stringify(firstElement)} not found. values ${JSON.stringify(expectedValues)}`,
            actual
          ));
        }
      }
    } else if (elementType === 'last') {
      if (actual.length === 0) {
        errors.push(createError(
          path,
          `Expected non-array to check`,
          actual
        ));
      } else {
        const lastElement = actual[actual.length - 1]; // get array cuối
        if (!expectedValues.some(err => comparedValue(lastElement, err))) {
          errors.push(createError(
            path,
            `Last element ${JSON.stringify(lastElement)} not found. values ${JSON.stringify(expectedValues)}`,
            actual
          ));
        }
      }
    } else {
      const missing = expectedValues.filter(expected => 
        !actual.some(item => comparedValue(item, expected))
      );
      if (elementType === 'all' && missing.length > 0) {
        errors.push(createError(
          path,
          `Missing required values: ${missing.join(', ')}`,
          actual
        ));
      }
    }
  };
  const validateOperatorObject = (
    actual: any,
    config: OperatorConfig,
    path: string[],
    errors: ValidationError[],
  ) => {
    const { operator, expect, element, field } = config;
    const resolvedExpect = resolveValue(expect);

    if (Array.isArray(actual) && field) {
      const allFieldValues = actual
        .map(item => field ? getNestedValue(item, field) : item)
        .filter(val => val !== undefined);

      switch (operator.toLowerCase()) {
        case 'include':
          validateInclusion(allFieldValues, resolvedExpect, element, path, errors);
          break;
        case 'equal':
          validateEquality(allFieldValues, resolvedExpect, element, path, errors);
          break;
        default:
          errors.push(createError(path, `Unknown operator: ${operator}`, allFieldValues));
      }
      return;
    }

    const targetValue = field ? getNestedValue(actual, field) : actual;
    switch (operator.toLowerCase()) {
      case 'equal':
        validateEquality(targetValue, resolvedExpect, element, path, errors);
        break;
      case 'include':
        validateInclusion(targetValue, resolvedExpect, element, path, errors);
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
    errors: ValidationError[],
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
    errors: ValidationError[],
  ) => {
    if (!Array.isArray(actual)) {
      errors.push(createError(path, 'Expected array', actual));
      return;
    }

    if (expected.every(item => isOperatorObject(item))) {
      expected.forEach(rule => {
        const fieldValues = actual.map(item => 
          getNestedValue(item, (rule as OperatorConfig).field)
        );
        validateFieldValues(fieldValues, rule as OperatorConfig, [...path, (rule as OperatorConfig).field], errors);
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
  ) => {
    const resolvedExpect = resolveValue(rule.expect);
    
    switch (rule.operator.toLowerCase()) {
      case 'include':
        validateInclusion(values, resolvedExpect, rule.element, path, errors);
        break;
      case 'equal':
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
    }
  };

  return {
    validate: (actualData: any, expectConfig: any): ValidationError[] => {
      const errors: ValidationError[] = [];
      validateRecursive(actualData, expectConfig, [], errors);
      return errors;
    }
  };
};