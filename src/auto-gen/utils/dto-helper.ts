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
  const keys = Object.keys(instance);
  if (keys.length === 0) {
    console.warn(`No found keys in DTO class: ${dtoClass.name}`);
    return [];
  }

  const errorCasesByField: Record<string, any[]> = {};
  keys.forEach((field) => {
    const decorators = getDecorators(instance, field);
    const fieldValue = payload[field] !== undefined ? payload[field] : instance[field];
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
    const errors = softErrorFromMap(testcaseGen, dtoClass);

    if (errors.length > 0) {
      return { testcaseGen, expectedDetail: errors };
    }

    return { testcaseGen, expectedDetail: [] };
  });
}
export function generateErrorVariantsForField(
  fieldValue: any,
  decorators: Record<string, any>,
): any[] {
  const variants: any[] = [];

  // 2. Sai kiểu dữ liệu
  const fieldType = decorators['type'] || 'string';
  switch (fieldType) {
    case 'string':
      variants.push(123);
      variants.push('check_ulid')
      break;
    case 'number':
      variants.push('invalid_number'); 
      variants.push(NaN);
      break;
    case 'enum':
      variants.push('invalid_enum_value');
      break;
    case 'array':
      variants.push('not_an_array');
      variants.push([123]);
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
  // variants.push(null);
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
    const errorMessage = customMessage || defaultMessage;
    if (errorMessage) {
      errors.push(errorMessage);
    }
  };

  // 1. Kiểm tra optional
  if (decorators['optional'] && (value === undefined || value === null)) {
    return errors;
  }

  // 2. Kiểm tra isDefined
  if (value === undefined  || value === null) {
    if (decorators['isDefined']) {
      if (decorators['isChecked']) {
          addError(
            decorators['notUndefinedMessage'],
            null
          );
      } else {
        addError(
          null,
          `${field} ${ErrorMessage.DEFINED}`
        );
       
      }
    }
  }
  // 3. Kiểm tra notEmpty
  if ((value === '' || value === undefined ) && decorators['notEmpty']) {
    if (decorators['isChecked']) {
       addError(
        decorators['notEmptyMessage'],
        null
      )
    } else {
      addError(
        null,
        `${field} ${ErrorMessage.EMPTY}`
      )
       
    }
  }
  // Kiểm tra ulID
  if (decorators['isULID']) {
    const isString = typeof value === 'string';
    const strVal = isString ? value : '';
  
    const isInvalid =
      value === undefined ||
      value === null ||
      value === '' ||
      !isString ||
      !strVal.startsWith('{{');
  
    if (isInvalid) {
      addError(
        null,
        `${field} ${ErrorMessage.INVALID_ULID}`
      );
    }
  }
  
  // 4. Kiểm tra kiểu dữ liệu
  switch (decorators['type']) {
    case 'string':
      if (typeof value !== 'string') {
       
        if (decorators['isChecked']) {
          addError(
            decorators['stringMessage'],
            undefined
          );
        } else {
           addError(
            null,
            `${field} ${ErrorMessage.INVALID_TYPE_STRING}`
          );
           
        }
      }

      if (typeof value === 'string') {
        if (decorators['isChecked']) {
          if (field === 'workspaceId' && value !== '0') {
            addError(
              decorators['notCheckedMessage'],
              null  
            );
             
          }
         
          if (field === 'channelId' && !value.startsWith('{{')) {
             addError(
              decorators['notCheckedMessage'],
              null
            ); 
          }
          if (field === 'userId' && !value.startsWith('{{')) {
            addError(
              decorators['notCheckedMessage'],
              null
            ); 
          }
        }
        
      }
     
      const str = typeof value === 'string' ? value : '';
      const hasMin = decorators['minLength'] != null;
      const hasMax = decorators['maxLength'] != null;

      if (hasMin || hasMax) {
        const len = str.length;
        const minViolated = hasMin && len < decorators['minLength'];
        const maxViolated = hasMax && len > decorators['maxLength'];

        if (minViolated || maxViolated) {
          addError(
            null,
            ErrorMessage.INVALID_RANGE_STRING_LENGTH
          );
           
        }
      }
      break;
    case 'number':
      if (typeof value !== 'number' || isNaN(value)) {
        const shouldStop = addError(
          decorators['numberMessage'],
          `${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`
        );
         
      }
      if (typeof value === 'number') {
        const minViolated = decorators['min'] && value < decorators['min'];
        const maxViolated = decorators['max'] && value > decorators['max'];
        if (minViolated) {
          addError(
            decorators['minMessage'],
            `${field} ${ErrorMessage.MIN}`
          );
           
        }
        if (maxViolated) {
          addError(
            decorators['maxMessage'],
            `${field} ${ErrorMessage.MAX}`
          );
           
        }
      }
      break;

    case 'array':
      if (!Array.isArray(value)) {
         addError(
          decorators['arrayMessage'],
          `${field} ${ErrorMessage.INVALID_TYPE_ARRAY}`
        );
         
      }
      if (decorators['minArray'] && value.length < decorators['minArray']) {
        addError(
          decorators['minArrayMessage'],
          `${field} ${ErrorMessage.MIN_ARRAY}`
        );
         
      }
      if (decorators['maxArray'] && value.length > decorators['maxArray']) {
        addError(
          decorators['maxArrayMessage'],
          `${field} ${ErrorMessage.MAX_ARRAY}`
        );
         
      }
      break;

    case 'object':
      if (typeof value !== 'object' || Array.isArray(value) || value === null) {
        addError(
          decorators['objectMessage'],
          `${field} ${ErrorMessage.INVALID_TYPE_OBJ}`
        );
         
      }
      break;

    case 'enum':
      if (!decorators['enumType'] || !Object.values(decorators['enumType']).includes(value)) {
        addError(
          decorators['enumMessage'],
          `${field} ${ErrorMessage.INVALID_ENUM}`
        );
         
      }
      break;
  }
  return errors;
}

export function softErrorFromMap(payload: Record<string, any>, dtoClass: any): string[] {
  const errors: string[] = [];
  const instance = new dtoClass();

  const ERROR_PRIORITY= [
    "Could not resolve permission type",
    "Unsupported permission type", 
    "Invalid channel",
    "Unauthorized request",
  ];

  // Thu thập tất cả lỗi từ các field
  for (const field of Object.keys(payload)) {
    const value = payload[field];
    const decorators = getDecorators(instance, field);
    const fieldErrors = mapError(field, value, decorators);
    errors.push(...fieldErrors);
  }

  // Tìm lỗi có độ ưu tiên cao nhất
  for (const priorityError of ERROR_PRIORITY) {
    if (errors.includes(priorityError)) {
      return [priorityError];
    }
  }

  // Trả về tất cả lỗi nếu không có lỗi ưu tiên
  return errors;
}