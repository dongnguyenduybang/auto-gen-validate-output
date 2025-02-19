import 'reflect-metadata';
import { ErrorMessage } from '../enums/error-message.enum';
import { getLength } from './ultil';

export function getDecorators(
  target: any,
  propertyKey: string,
): Record<string, any> {
  const decorators: Record<string, any> = {};

  const metadataKeys = Reflect.getMetadataKeys(target, propertyKey);

  metadataKeys.forEach((key) => {
    const value = Reflect.getMetadata(key, target, propertyKey);
    decorators[key] = value;
  });

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

    const fieldValue =
      payload[field] !== undefined ? payload[field] : instance[field];
    errorCasesByField[field] = generateErrorVariantsForField(
      fieldValue,
      decorators,
    );
  });

  const fields = Object.keys(errorCasesByField);

  if (fields.length === 0) {
    console.warn(`No error cases generated for DTO class: ${dtoClass.name}`);
    return [];
  }

  const allErrorCombinations = generateCombinations(fields, errorCasesByField);

  return allErrorCombinations.map((combination) => {
    const testcaseGen = { ...combination };
    const expectedDetail = fields.flatMap((field) => {
      const value = testcaseGen[field];
      const decorators = getDecorators(instance, field);
      return mapError(field, value, decorators);
    });
    return { testcaseGen, expectedDetail };
  });
}
export function generateErrorVariantsForField(
  fieldValue: any,
  decorators: Record<string, any>,
): any[] {
  console.log(fieldValue);
  const variants: any[] = [];

  if (!decorators['optional']) {
    variants.push(undefined);
  }
  if (decorators['notNull']) {
    variants.push(null);
  }

  if (decorators['notEmpty']) {
    variants.push('');
  }

  if (decorators['type'] === 'string') {
    variants.push(12345);
    variants.push(fieldValue);
  } else if (decorators['type'] === 'number') {
    variants.push('random_string');
    variants.push(fieldValue);
  } else if (decorators['type'] === 'enum') {
    variants.push('invalid_value');
    variants.push(fieldValue);
  }

  if (decorators['min'] !== undefined) {
    variants.push(decorators['min'] - 1);
  }

  if (decorators['max'] !== undefined) {
    variants.push(decorators['max'] + 1);
  }

  if (decorators['minLength'] !== undefined) {
    variants.push('a'.repeat(decorators['minLength'] - 1));
  }
  if (decorators['maxLength'] !== undefined) {
    variants.push('a'.repeat(decorators['maxLength'] + 1));
  }
  return variants;
}
export function combineFields(arrays: any[][]): any[][] {
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

  if (decorators['type']) {
    if (decorators['type'] === 'string') {
      if (typeof value !== 'string') {
        errors.push(`${field} ${ErrorMessage.INVALID_TYPE_STRING}`);
      }

      if (decorators['minLength'] !== undefined) {
        const stringValue = String(value || '');
        if (stringValue.length < decorators['minLength'] ||  typeof value !== 'string') {
          errors.push(
            `${field} ${ErrorMessage.MIN_LENGTH} ${decorators['minLength']} characters`,
          );
        }
       
      }

      if (decorators['maxLength'] !== undefined) {
        const safeLength = getLength(value);
        if (safeLength > decorators['maxLength']) {
          errors.push(
            `${field} ${ErrorMessage.MAX_LENGTH} ${decorators['maxLength']} characters`,
          );
        }
      }

      if ((value === null || value === undefined) && !decorators['optional']) {
        errors.push(`${field} should not be null or undefined`);
      }

      if (
        decorators['notEmpty'] &&
        (value === undefined || value === '' || value === null)
      ) {
        errors.push(`${field} should not be empty`);
      }
    } else if (decorators['type'] === 'number') {
      
      if (typeof value !== 'number') {
        errors.push(`${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`);
      }

      if ((value === undefined || value === null || value === '')) {
        errors.push(`${field} should not be empty`);
      }else {

      }

      if (decorators['isIn']) {
        const allowedValues = decorators['isIn'];
        if (!allowedValues.includes(value)) {
          errors.push(
            `${field} must be one of the following values: ${allowedValues.join(', ')}`,
          );
          return errors;
        }
      }


      if (decorators['min'] || decorators['min'] === 0) {
        if (
          value === undefined ||
          value === null ||
          value === '' ||
          typeof value !== 'number'
        ) {

          errors.push(`${field} ${ErrorMessage.MIN} ${decorators['min']}`);
        } 
        else if (value < decorators['min']) {
          errors.push(`${field} ${ErrorMessage.MIN} ${decorators['min']}`);
        } 

       
      }

      if (decorators['max']) {
        if (
          value === undefined ||
          value === null ||
          value === '' ||
          typeof value !== 'number'
        ) {
          errors.push(`${field} ${ErrorMessage.MAX} ${decorators['max']}`);
        } 
        else if (value > decorators['max']) {
          errors.push(`${field} ${ErrorMessage.MAX} ${decorators['max']}`);
        }
      }
    }
  }

  return errors;
}


function validatePayloadType(payload: any, dtoClass: any) {
  const errors = [];
  let valueDate;
  const dtoInstance = new dtoClass();
  Object.keys(payload).forEach((key) => {
    const isOptional = Reflect.getMetadata('optional', dtoClass.prototype, key);
    const defaultValue = dtoInstance[key];
    if (isOptional && payload[key] === undefined) {
      payload[key] = defaultValue;
    } else if (payload[key] === '') {
      errors.push(`"${key}" ${ErrorMessage.EMPTY}`);
    } else if (payload[key] === undefined) {
      errors.push(`"${key}" ${ErrorMessage.UNDEFINED}`);
    } else if (payload[key] === null) {
      errors.push(`"${key}" ${ErrorMessage.NULL}`);
    }

    const metadata = Reflect.getMetadata('type', dtoClass.prototype, key);
    if (metadata) {
      if (metadata === 'string' && typeof payload[key] !== 'string') {
        errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_STRING}`);
      } else if (metadata === 'number' && typeof payload[key] !== 'number') {
        errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_NUMBER}`);
      } else if (metadata === 'boolean' && typeof payload[key] !== 'boolean') {
        errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_BOOLEAN}`);
      } else if (metadata === 'array' && !Array.isArray(payload[key])) {
        errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_ARRAY}`);
      } else if (
        metadata === 'object' &&
        typeof payload[key] !== 'object' &&
        !Array.isArray(payload[key])
      ) {
        errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_OBJ}`);
      } else if (metadata === 'date') {
        if (!(payload[key] instanceof Date)) {
          valueDate = new Date(payload[key]);
        }
        if (isNaN(valueDate.getTime())) {
          errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_DATE}`);
        }
      } else if (metadata === 'enum') {
        const enumType = Reflect.getMetadata(
          'enumType',
          dtoClass.prototype,
          key,
        );
        if (enumType && !Object.values(enumType).includes(payload[key])) {
          errors.push(`"${key}" ${ErrorMessage.INVALID_ENUM}`);
        }
      }
    }

    const minLength = Reflect.getMetadata('minLength', dtoClass.prototype, key);
    if (minLength && payload[key]?.length <= minLength) {
      errors.push(
        `"${key}" ${ErrorMessage.MIN_LENGTH} ${minLength} characters. But got ${payload[key]?.length}`,
      );
    }

    const maxLength = Reflect.getMetadata('maxLength', dtoClass.prototype, key);
    if (maxLength && payload[key]?.length > maxLength) {
      errors.push(
        `"${key}" ${ErrorMessage.MAX_LENGTH} ${maxLength} characters. But got ${payload[key]?.length}`,
      );
    }

    const min = Reflect.getMetadata('min', dtoClass.prototype, key);
    if (min && payload[key] < min) {
      errors.push(
        `"${key}" ${ErrorMessage.MIN} ${min}. But got ${payload[key]}`,
      );
    }

    const max = Reflect.getMetadata('max', dtoClass.prototype, key);
    if (max && payload[key] > max) {
      errors.push(
        `"${key}" ${ErrorMessage.MAX} ${max}. But got ${payload[key]}`,
      );
    }

    const minArray = Reflect.getMetadata('minArray', dtoClass.prototype, key);
    if (minArray && payload[key]?.length < minArray) {
      errors.push(
        `"${key}" ${ErrorMessage.MIN_ARRAY} ${minArray}. But got ${payload[key]?.length}`,
      );
    }

    const maxArray = Reflect.getMetadata('maxArray', dtoClass.prototype, key);
    if (maxArray && payload[key]?.length > maxArray) {
      errors.push(
        `"${key}" ${ErrorMessage.MAX_ARRAY} ${maxArray}. But got ${payload[key]?.length}`,
      );
    }
  });
  return errors;
}

export async function validateTestCase(testCasePayload: any, dtoClass: any) {
  // let result = comparePayload(inputPayload, testCasePayload);

  // if (!result.isTestCaseValid) {

  //     return { valid: false, errors: result.errors };
  // }

  const typeErrors = validatePayloadType(testCasePayload, dtoClass);
  if (typeErrors.length > 0) {
    return { valid: false, errors: typeErrors };
  }

  return { valid: true, errors: [] };
}

export function extractDTO(dtoClass: any) {
  const optionals: string[] = [];
  const payload: Record<string, any> = {};

  const prototype = dtoClass.prototype;
  const instance = new dtoClass();

  for (const key of Object.keys(instance)) {
    const isOptional = Reflect.getMetadata('optional', prototype, key);
    const defaultValue = instance[key];

    if (isOptional) {
      optionals.push(key);
    }

    payload[key] = defaultValue;
  }

  return { optionals, payload };
}
