import 'reflect-metadata';
import { ErrorMessage } from '../enums/error-message.enum';

export function getDecorators(
  target: any,
  propertyKey: string,
): Record<string, any> {
  const decorators: Record<string, any> = {};

  let metadataKeys = Reflect.getMetadataKeys(target, propertyKey);
  metadataKeys.forEach((key) => {
    decorators[key] = Reflect.getMetadata(key, target, propertyKey);
  });

  if (typeof target === 'function') {
    metadataKeys = Reflect.getMetadataKeys(target, propertyKey);
    metadataKeys.forEach((key) => {
      if (!decorators[key]) {
        decorators[key] = Reflect.getMetadata(key, target, propertyKey);
      }
    });
  }

  let proto = Object.getPrototypeOf(target);
  while (proto && proto !== Object.prototype) {
    metadataKeys = Reflect.getMetadataKeys(proto, propertyKey);
    metadataKeys.forEach((key) => {
      if (!decorators[key]) {
        decorators[key] = Reflect.getMetadata(key, proto, propertyKey);
      }
    });
    proto = Object.getPrototypeOf(proto);
  }

  return decorators;
}

export function generateErrorCases(
  dtoClass: any,
  payload: Record<string, any>,
): any[] {
  const instance = new dtoClass();
  console.log(instance);
  const keys = Object.keys(instance);
  if (keys.length === 0) {
    console.warn(`No found keys in DTO class: ${dtoClass.name}`);
    return [];
  }

  const errorCasesByField: Record<string, any[]> = {};
  keys.forEach((field) => {
    const decorators = getDecorators(instance, field);
    const fieldValue =
      payload[field] !== undefined ? payload[field] : instance[field];
    const variants = generateErrorVariantsForField(fieldValue, decorators);

    errorCasesByField[field] = Array.isArray(variants) ? variants : [];
  });

  const fields = Object.keys(errorCasesByField);
  if (fields.length === 0) {
    console.warn(`No error cases generated for DTO class: ${dtoClass.name}`);
    return [];
  }

  const allErrorCombinations = generateCombinations(fields, errorCasesByField);
  return allErrorCombinations.map((combination) => {
    const testcaseGen = { ...combination };
    for (const field of fields) {
      const value = testcaseGen[field];
      const decorators = getDecorators(instance, field);
      const errors = mapError(field, value, decorators);

      if (errors.length > 0) {
        return { testcaseGen, expectedDetail: errors }; // Stop at the first error
      }
    }

    return { testcaseGen, expectedDetail: [] }; // No errors found
  });
}
export function generateErrorVariantsForField(
  fieldValue: any,
  decorators: Record<string, any>,
): any[] {
  const variants: any[] = [];

  // 1. Các giá trị đặc biệt


  // 2. Sai kiểu dữ liệu
  const fieldType = decorators['type'] || 'string';
  switch (fieldType) {
    case 'string':
      variants.push(123);
      variants.push('check_ulid') // Number cho string field
      break;
    case 'number':
      variants.push('invalid_number'); // String cho number field
      variants.push(NaN);
      break;
    case 'enum':
      variants.push('invalid_enum_value');
      break;
    case 'array':
      variants.push('not_an_array');
      variants.push([123]); // Array với phần tử sai type
      break;
    case 'boolean':
      variants.push('invalid_boolean');
      break;
  }

  // 3. Vi phạm min/max
  if (decorators['min'] !== undefined) {
    variants.push(decorators['min'] - 1);
  }
  if (decorators['max'] !== undefined) {
    variants.push(decorators['max'] + 1);
  }

  // 4. Vi phạm độ dài
  if (decorators['minLength']) {
    variants.push('a'.repeat(decorators['minLength'] - 1));
  }
  if (decorators['maxLength']) {
    variants.push('a'.repeat(decorators['maxLength'] + 1));
  }

  // 5. Vi phạm kích thước mảng
  if (decorators['minArray']) {
    variants.push(new Array(decorators['minArray'] - 1).fill(null));
  }
  if (decorators['maxArray']) {
    variants.push(new Array(decorators['maxArray'] + 1).fill(null));
  }

  // 6. Giá trị hợp lệ
  variants.push(fieldValue);

  variants.push(undefined);
  variants.push(null);
  variants.push('');
  
  return variants;
}

export function combineFields(arrays: any[][]): any[][] {
  if (!Array.isArray(arrays) || arrays.some((arr) => !Array.isArray(arr))) {
    throw new Error(
      'Invalid input for combineFields: Expected an array of arrays',
    );
  }

  return arrays.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
}

export function generateCombinations(
  fields: string[],
  errorCasesByField: Record<string, any[]>,
): any[] {
  const fieldErrorVariants = fields.map((field) => {
    return errorCasesByField[field].map((errorVariant) => ({
      [field]: errorVariant,
    }));
  });

  return combineFields(fieldErrorVariants).map((combination) => {
    return combination.reduce((acc, curr) => ({ ...acc, ...curr }), {});
  });
}

export function mapError(
  field: string,
  value: any,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];

  // Helper function để thêm lỗi
  const addError = (customMessage: string | undefined, defaultMessage: string) => {
    if (customMessage) {
      errors.push(customMessage);
      return true
    } else {
      errors.push(defaultMessage);
      return false
    }
  };

  // 1. Kiểm tra optional
  if (decorators['optional'] && (value === undefined || value === null)) {
    return errors;
  }

  // 2. Kiểm tra isDefined
  if (value === undefined || value === null || value === "") {
    if(decorators['isDefined'] && (value === undefined || value === null )){
      const shouldStop = addError(
        decorators['notUndefinedMessage'],
        `${field} ${ErrorMessage.DEFINED}`
      );
      if (shouldStop) return errors;
    }
    if (decorators['maxLength'] && decorators['minLength']) {
      const shouldStop = addError(
        undefined,
        `${ErrorMessage.INVALID_RANGE_STRING_LENGTH}`
      );
      if (shouldStop) return errors;
    }
    if (decorators['notEmpty']) {
      const shouldStop = addError(
        decorators['notEmptyMessage'],
        `${field} ${ErrorMessage.EMPTY}`
      );
      if (shouldStop) return errors;
    }
    
  }

  switch (decorators['type']) {
    case 'string':
      if (typeof value !== 'string' && (value !== undefined || value !== null || value !== "")) {
        const shouldStop = addError(
          decorators['stringMessage'],
          `${field} ${ErrorMessage.INVALID_TYPE_STRING}`
        );
        if (shouldStop) return errors;
      }
      if (typeof value === 'string' && value.length > 0) {
        const minViolated = decorators['minLength'] && value.length < decorators['minLength'];
        const maxViolated = decorators['maxLength'] && value.length > decorators['maxLength'];
        if (minViolated || maxViolated) {
          const shouldStop = addError(
            decorators['lengthMessage'],
            `${ErrorMessage.INVALID_RANGE_STRING_LENGTH}`
          );
          if (shouldStop) return errors;
        }
      }
      if(typeof value === 'string' && decorators['isULID']){
        
        if(value.startsWith('{{')){
          return errors;
        }else {
          const shouldStop = addError(
            decorators['notULID'],
            `${field} ${ErrorMessage.INVALID_TYPE_STRING}`
          );
          if (shouldStop) return errors;
        }
      }
      break;
    case 'number':
      if (typeof value !== 'number' && (value !== undefined || value !== null || value !== "")) {
        const shouldStop = addError(
          decorators['numberMessage'],
          `${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`
        );
        if (shouldStop) return errors;
      }
      if (typeof value === 'number') {
        const minViolated = decorators['min'] && value < decorators['min'];
        const maxViolated = decorators['max'] && value > decorators['max'];
        if (minViolated) {
          const shouldStop = addError(
            undefined,
            `${field} ${ErrorMessage.MIN}`
          );
          if (shouldStop) return errors;
        } else if(maxViolated) {
          const shouldStop = addError(
            undefined,
            `${field} ${ErrorMessage.MAX}`
          );
          if (shouldStop) return errors;
        }
      }
      break;
    case 'array':
      if (!Array.isArray(value) && (value !== undefined || value !== null || value !== "")) {
        const shouldStop = addError(
          decorators['arrayMessage'],
          `${field} ${ErrorMessage.INVALID_TYPE_ARRAY}`
        );
        if (shouldStop) return errors;
      } else {
        // Kiểm tra minArray/maxArray
        if (decorators['minArray'] && value.length < decorators['minArray']) {
          const shouldStop = addError(
            decorators['minArrayMessage'],
            `${field} ${ErrorMessage.MIN_ARRAY}}`
          );
          if (shouldStop) return errors;
        }

        if (decorators['maxArray'] && value.length > decorators['maxArray']) {
          const shouldStop = addError(
            decorators['maxArrayMessage'],
            `${field} ${ErrorMessage.MAX_ARRAY}}`
          );
          if (shouldStop) return errors;
        }
      }
      break;
    case 'object':
      if (typeof value !== 'object' && Array.isArray(value) && (value !== undefined || value !== null)) {
        const shouldStop = addError(
          decorators['objectMessage'],
          `${field} ${ErrorMessage.INVALID_TYPE_OBJ}`
        );
        if (shouldStop) return errors;
      }
      break;

    case 'enum':
      if (!decorators['enumType'] || !Object.values(decorators['enumType']).includes(value)) {
        const shouldStop = addError(
          decorators['enumMessage'],
          `${field} ${ErrorMessage.INVALID_ENUM}`
        );
        if (shouldStop) return errors;
      }
      break;
      
  }
  // if (value === '' && decorators['notEmpty']) {
  //   const shouldStop = addError(
  //     decorators['notEmptyMessage'],
  //     `${field} ${ErrorMessage.EMPTY}`
  //   );
  //   console.log(value,shouldStop)
  //   if (shouldStop) return errors;
  // }

  return errors;
}