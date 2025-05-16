<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import { Element } from '../enums/element.enum';
import { Operator } from '../enums/operator.enum';
import { IContext, TestContext, WSSContext } from './text-context';
=======
// import { Element } from '../enums/element.enum';
// import { Operator } from '../enums/operator.enum';
// import { IContext, ValidationError } from './declarations';
// import { comparedValue, getNestedValue, isOperatorObject, resolveValue } from './helper';
>>>>>>> main

// interface OperatorConfig {
//   field?: string;
//   operator: Operator;
//   element?: Element;
//   expect: any;
// }

// export const createApiValidator = (context: IContext) => {
//   // Helper functions

<<<<<<< HEAD
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
=======
//   const createError = (
//     path: string[],
//     expected: any,
//     actual: any,
//     message?: string,
//   ): ValidationError => ({
//     path: path.join('.'),
//     expected: typeof expected === 'string' ? expected : JSON.stringify(expected),
//     actual: JSON.stringify(actual),
//     message: message || `Validation failed at ${path.join('.')}`,
//   });

//   // Validation functions
//   const validateOperatorRules = (
//     config: OperatorConfig,
//     actualValue: any,
//     path: string[],
//     errors: ValidationError[],
//     parentType: 'object' | 'array',
//   ): boolean => {
//     const rules = [
//       {
//         condition: parentType === 'object' && config.operator === Operator.INCLUDE,
//         message: `Object property '${path.join('.')}' must use EQUAL operator, not INCLUDE`
//       },
//       {
//         condition: parentType === 'array' && config.operator === Operator.EQUAL,
//         message: `Array element '${path.join('.')}' must use INCLUDE operator, not EQUAL`
//       },
//       {
//         condition: config.operator === Operator.INCLUDE && parentType === 'array' && !config.element,
//         message: `INCLUDE operator for array element '${path.join('.')}' requires element (ALL, FIRST, LAST)`
//       }
//     ];
>>>>>>> main

//     for (const rule of rules) {
//       if (rule.condition) {
//         errors.push(createError(path, rule.message, actualValue));
//         return false;
//       }
//     }
//     return true;
//   };

<<<<<<< HEAD
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
=======
//   const validateEquality = (
//     actual: any,
//     expected: any,
//     elementType: Element | undefined,
//     path: string[],
//     errors: ValidationError[],
//   ) => {
//     if (!elementType) {
//       if (!comparedValue(actual, expected, context)) {
//         errors.push(createError(path, expected, actual));
//       }
//       return;
//     }

//     if (!Array.isArray(actual)) {
//       errors.push(createError(path, `Expected array for element type '${elementType}'`, actual));
//       return;
//     }

//     const validators = {
//       [Element.ALL]: () => {
//         if (!actual.every((item) => comparedValue(item, expected, context))) {
//           errors.push(createError(path, `All elements must equal ${JSON.stringify(expected)}`, actual));
//         }
//       },
//       [Element.FIRST]: () => {
//         if (actual.length === 0 || !comparedValue(actual[0], expected, context)) {
//           errors.push(createError(path, `First element must equal ${JSON.stringify(expected)}`, actual));
//         }
//       },
//       [Element.LAST]: () => {
//         if (actual.length === 0 || !comparedValue(actual[actual.length - 1], expected, context)) {
//           errors.push(createError(path, `Last element must equal ${JSON.stringify(expected)}`, actual));
//         }
//       }
//     };

//     if (validators[elementType]) {
//       validators[elementType]();
//     }
//   };
>>>>>>> main

//   const validateInclusion = (
//     actual: string[],
//     expectedValues: string[],
//     elementType: Element,
//     path: string[],
//     errors: ValidationError[],
//   ) => {
//     const normalizedActual = Array.isArray(actual) ? actual.flat(Infinity) : [actual];
//     const expectedArray = Array.isArray(expectedValues) ? expectedValues.flat(Infinity) : [expectedValues];

<<<<<<< HEAD
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
=======
//     if (elementType === Element.ALL) {
//       return validateAllElementsInclusion(normalizedActual, expectedArray, path, errors);
//     }

//     const valuesToCheck = getValuesToCheck(normalizedActual, elementType);
//     if (valuesToCheck.length === 0) {
//       errors.push(createError(path, `No values found at path '${path.join('.')}'`, valuesToCheck));
//       return;
//     }
>>>>>>> main

//     const missing = expectedArray.filter(
//       (expected) => !valuesToCheck.some((val) => comparedValue(val, expected, context)),
//     );

<<<<<<< HEAD
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
=======
//     if (missing.length > 0) {
//       const message = elementType
//         ? `${elementType} elements of ${path.join('.')} must include ${missing.join(', ')}`
//         : `${path.join('.')} must expected ${missing.join(', ')}`;
//       errors.push(createError(path, message, valuesToCheck));
//     }
//   };

//   const validateAllElementsInclusion = (
//     actual: any[],
//     expected: any[],
//     path: string[],
//     errors: ValidationError[],
//   ) => {
//     if (actual.length !== expected.length) {
//       errors.push(createError(path, expected, actual));
//       return;
//     }

//     const missingInActual = expected.filter(
//       (expected) => !actual.some((val) => comparedValue(val, expected, context)),
//     );

//     const missingInExpected = actual.filter(
//       (val) => !expected.some((expected) => comparedValue(val, expected, context)),
//     );

//     if (missingInActual.length > 0 || missingInExpected.length > 0) {
//       let message = `Element.ALL validation failed: `;
//       if (missingInActual.length > 0) {
//         message += `Missing expected values: ${missingInActual.join(', ')}. `;
//       }
//       if (missingInExpected.length > 0) {
//         message += `Unexpected values: ${missingInExpected.join(', ')}`;
//       }
//       errors.push(createError(path, message.trim(), actual));
//     }
//   };

//   const getValuesToCheck = (values: any[], elementType: Element): any[] => {
//     console.log(values)
//     console.log(values.slice(0, 1))
//     switch (elementType) {
//       case Element.FIRST: return values.slice(0, 1);
//       case Element.LAST: return values.slice(-1);
//       default: return values;
//     }
//   };

//   const validateOperatorObject = (
//     actual: any,
//     config: OperatorConfig,
//     path: string[],
//     errors: ValidationError[],
//     parentType: 'object' | 'array' = 'object',
//   ) => {
//     const { field, operator, element, expect } = config;
//     const resolvedExpect = resolveValue(expect, context);

//     if (field && field.includes('.')) {
//       handleNestedField(actual, config, path, errors, parentType);
//       return;
//     }

//     const targetValue = field ? getNestedValue(actual, field) : actual;

//     if (!validateOperatorRules(config, targetValue, path, errors, parentType)) {
//       return;
//     }

//     if (element && !Array.isArray(targetValue)) {
//       errors.push(createError(
//         path,
//         `Expected array for element validation but got ${typeof targetValue}`,
//         targetValue,
//       ));
//       return;
//     }

//     const processedExpect = operator === Operator.INCLUDE && !Array.isArray(resolvedExpect)
//       ? [resolvedExpect]
//       : resolvedExpect;

//     if (operator === Operator.INCLUDE) {
//       validateInclusion(targetValue, processedExpect, element, path, errors);
//     } else if (operator === Operator.EQUAL) {
//       validateEquality(targetValue, processedExpect, element, path, errors);
//     } else {
//       errors.push(createError(path, `Unknown operator: ${operator}`, targetValue));
//     }
//   };

//   const handleNestedField = (
//     actual: any,
//     config: OperatorConfig,
//     path: string[],
//     errors: ValidationError[],
//     parentType: 'object' | 'array',
//   ) => {
//     const fieldParts = config.field.split('.');
//     const targetValues = getNestedValue(actual, config.field);
//     validateFieldValues(
//       targetValues,
//       { ...config, field: fieldParts[fieldParts.length - 1] },
//       [...path, ...fieldParts],
//       errors,
//       parentType,
//     );
//   };


//   const validateObject = (
//     actual: Record<string, any>,
//     expected: Record<string, any>,
//     path: string[],
//     errors: ValidationError[],
//   ) => {
//     if (typeof actual !== 'object' || actual === null) {
//       errors.push(createError(path, 'Expected object', actual));
//       return;
//     }

//     Object.entries(expected).forEach(([key, expectedValue]) => {
//       if (isOperatorObject(expectedValue)) {
//         validateOperatorObject(
//           actual[key],
//           expectedValue as OperatorConfig,
//           [...path, key],
//           errors,
//           'object',
//         );
//       } else {
//         validateRecursive(actual[key], expectedValue, [...path, key], errors);
//       }
//     });
//   };

//   const validateArray = (
//     actual: unknown,
//     expected: any[],
//     path: string[],
//     errors: ValidationError[],
//   ) => {
//     if (!Array.isArray(actual)) {
//       errors.push(createError(path, 'Expected array', actual));
//       return;
//     }

//     if (expected.every((item) => isOperatorObject(item))) {
//       expected.forEach((rule) => {
//         const fieldValues = actual
//           .map((item) => getNestedValue(item, (rule as OperatorConfig).field))
//           .flat(Infinity);

//         validateFieldValues(
//           fieldValues,
//           rule as OperatorConfig,
//           [...path, (rule as OperatorConfig).field],
//           errors,
//           'array',
//         );
//       });
//       return;
//     }

//     expected.forEach((expectedItem, index) => {
//       validateRecursive(actual[index], expectedItem, [...path, `[${index}]`], errors);
//     });
//   };

//   const validateFieldValues = (
//     values: any[],
//     rule: OperatorConfig,
//     path: string[],
//     errors: ValidationError[],
//     parentType: 'object' | 'array',
//   ) => {
//     const resolvedExpect = resolveValue(rule.expect, context);

//     if (!validateOperatorRules(rule, values, path, errors, parentType)) {
//       return;
//     }

//     if (rule.operator === Operator.INCLUDE) {
//       validateInclusion(values, resolvedExpect, rule.element, path, errors);
//     } else if (rule.operator === Operator.EQUAL) {
//       validateEquality(values, resolvedExpect, rule.element, path, errors);
//     } else {
//       errors.push(createError(path, `Unknown operator: ${rule.operator}`, values));
//     }
//   };

//   const validateRecursive = (
//     actual: unknown,
//     expected: any,
//     path: string[],
//     errors: ValidationError[],
//   ) => {

//     if (isOperatorObject(expected)) {
//       validateOperatorObject(actual, expected as OperatorConfig, path, errors);
//     } else if (typeof expected === 'object' && expected !== null) {
//       Array.isArray(expected)
//         ? validateArray(actual, expected, path, errors)
//         : validateObject(actual, expected, path, errors);
//     } else if (typeof expected === 'string' && !comparedValue(actual, expected, context)) {
//       errors.push(createError(path, expected, actual));
//     }
//   };

//   return {
//     validate: (actualData: any, expectConfig: any): ValidationError[] => {
//       const errors: ValidationError[] = [];
//       validateRecursive(actualData, expectConfig, [], errors);
//       return errors;
//     },
//   };
// };
>>>>>>> main
