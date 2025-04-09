/* eslint-disable prettier/prettier */
import { Element } from '../enums/element.enum';
import { Operator } from '../enums/operator.enum';
import { TestContext } from './text-context';

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
    // Xử lý trường hợp string vs number
    if (typeof a === 'string' && typeof b === 'number') {
      return a === b.toString();
    }
    if (typeof a === 'number' && typeof b === 'string') {
      return a.toString() === b;
    }
    
    // So sánh array với primitive
    if (Array.isArray(a) && !Array.isArray(b)) {
      return a.length === 1 && comparedValue(a[0], b);
    }
    if (!Array.isArray(a) && Array.isArray(b)) {
      return b.length === 1 && comparedValue(a, b[0]);
    }
  
    // So sánh bình thường
    return JSON.stringify(a) === JSON.stringify(b);
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
      case Element.ALL:
        if (!actualArray.every(item => comparedValue(item, expected))) {
          errors.push(createError(
            path,
            `All elements must equal ${JSON.stringify(expected)}`,
            actualArray
          ));
        }
        break;
      case Element.FIRST:
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
        case Element.LAST:
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
    elementType: Element | undefined,
    path: string[],
    errors: ValidationError[],
  ) => {
    // Xử lý trường hợp không phải array
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
  
    // Xử lý trường hợp array
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
  };  const validateInclusion = (
    actual: any,
    expectedValues: any,
    elementType: Element | undefined,
    path: string[],
    errors: ValidationError[],
  ) => {
    // Chuyển đổi expectedValues thành array nếu chưa phải
    const expectedArray = Array.isArray(expectedValues) ? expectedValues : [expectedValues];
  
    if (!Array.isArray(actual)) {
      // Xử lý primitive value
      if (!expectedArray.some(ev => comparedValue(actual, ev))) {
        errors.push(createError(
          path,
          `Value ${JSON.stringify(actual)} not found in expected values ${JSON.stringify(expectedArray)}`,
          actual
        ));
      }
      return;
    }
  
    // Xử lý array
    if (elementType === Element.FIRST) {
      if (actual.length === 0 || !expectedArray.some(ev => comparedValue(actual[0], ev))) {
        errors.push(createError(
          path,
          `${JSON.stringify(expectedArray)}`,
          actual
        ));
      }
    } else if (elementType === Element.LAST) {
      if (actual.length === 0 || !expectedArray.some(ev => comparedValue(actual[actual.length - 1], ev))) {
        errors.push(createError(
          path,
          `${JSON.stringify(expectedArray)}`,
          actual
        ));
      }
    } else if (elementType === Element.ALL) {
      const missing = expectedArray.filter(expected => 
        !actual.some(item => comparedValue(item, expected))
      );
      if (missing.length > 0) {
        errors.push(createError(
          path,
          `${missing.join(', ')}`,
          actual
        ));
      }
    } else {
      // Không có elementType - kiểm tra bất kỳ phần tử nào
      const missing = expectedArray.filter(expected => 
        !actual.some(item => comparedValue(item, expected))
      );
      if (missing.length === expectedArray.length) {
        errors.push(createError(
          path,
          `${JSON.stringify(expectedArray)}`,
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
    const { field, operator, element, expect } = config;
    const resolvedExpect = resolveValue(expect);
    const targetValue = field ? getNestedValue(actual, field) : actual;

    if (element && !Array.isArray(targetValue)) {
      errors.push(createError(
        path,
        `Expected array for element validation but got ${typeof targetValue}`,
        targetValue
      ));
      return;
    }
  
  
    // Xử lý trường hợp expect là single value nhưng cần thành array
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