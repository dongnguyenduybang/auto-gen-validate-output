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
    // Resolve giá trị từ context nếu là template variable
    if (typeof b === 'string' && b.startsWith('{{')) {
      b = context.getValue(b.replace(/[{}]/g, '').split('.'));
    }
  
    // So sánh sau khi convert về string
    return String(a).trim() === String(b).trim();
  };
  
  function getNestedValue(obj: any, pathStr: string): any[] {
    const parts = pathStr.split('.');
    let current: any[] = [obj];
  
    for (const part of parts) {
      console.log(`Processing part: ${part}`);
      current = current.flatMap((item) => {
        if (item === undefined || item === null) {
          console.log(`Item is undefined or null at part: ${part}`);
          return [];
        }
        const value = item[part];
        if (Array.isArray(value)) {
          console.log(`Found array at part: ${part}`);
          return value;
        }
        if (value !== undefined) {
          console.log(`Found value at part: ${part}`);
          return [value];
        }
        console.log(`No value found at part: ${part}`);
        return [];
      });
      console.log(`Current after part ${part}:`, current);
    }
  
    // Loại bỏ các phần tử rỗng hoặc undefined/null
    current = current.filter(value => value !== undefined && value !== null);
  
    console.log('Final current:', current);
    return current;
  }
  
  
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
  };  

  const validateInclusion = async (
    actual: any,
    expectedValues: any,
    elementType: Element | undefined,
    path: string[],
    errors: ValidationError[],
  ) => {
    const expectedArray = Array.isArray(expectedValues) ? expectedValues : [expectedValues];
    const fullPath = path.join('.');
    const targetValues = getNestedValue(actual, fullPath);
    // targetValues = Array.isArray(targetValues) ? targetValues : [targetValues];
    const filteredValues = actual[0]
    let valuesToCheck = filteredValues;
    switch(elementType) {
      case Element.FIRST:
        valuesToCheck = filteredValues.slice(0, 1);
        break;
      case Element.LAST:
        valuesToCheck = filteredValues.slice(-1);
        break;
      case Element.ALL:
      default:
        valuesToCheck = filteredValues;
    }
    if (valuesToCheck.length === 0) {
      errors.push(createError(
        path,
        `No values found at path '${fullPath}'`,
        targetValues
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