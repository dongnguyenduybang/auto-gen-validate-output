import 'reflect-metadata';
import { ErrorMessage } from '../enums/error-message.enum';

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
  console.log(instance)
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

  if (!decorators['isDefined']) {
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

  } else if (decorators['type'] === 'enum') {
    variants.push('invalid_value');
    variants.push(fieldValue);
  } else if (decorators['type'] === 'array') {
    variants.push(['invalid_value']);
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

  // Helper function to add error and stop further checks
  const addErrorAndReturn = (message: string): string[] => {
    errors.push(message);
    return errors; // Return immediately after adding the first error
  };

  if (decorators['optional'] && value === undefined) {
    return errors;
  }

  if (decorators['notEmpty'] && (value === undefined || value === null || value === '')) {
    if (field === 'content') {
      errors.push(`${field} ${ErrorMessage.EMPTY}`);
    } else {
      return addErrorAndReturn(decorators['notEmptyMessage'] || `${field} ${ErrorMessage.EMPTY}`);
    }
  }

  if (decorators['isDefined'] && (value === undefined || value === null)) {
    if (field === 'content') {
      errors.push(`${field} ${ErrorMessage.DEFINED}`);
    } else {
      return addErrorAndReturn(decorators['notUndefinedMessage'] || `${field} ${ErrorMessage.DEFINED}`);
    }
  }

  if (decorators['type'] === 'string') {
    if (typeof value !== 'string') {
      if (field === 'content') {
        errors.push(`${field} ${ErrorMessage.INVALID_TYPE_STRING}`);
      } else {
        const notEmptyMessage = decorators['notEmptyMessage'] || 'Could not resolve permission type';
        return addErrorAndReturn(notEmptyMessage);
      }
    }

    if ((decorators['minLength'] && value.length < decorators['minLength']) ||
      (decorators['maxLength'] && value.length > decorators['maxLength'])) {
      return addErrorAndReturn(`${field} ${ErrorMessage.INVALID_RANGE_STRING_LENGTH}`);
    }

    if (field === 'channelId') {
      if (value === '') {
        const notEmptyMessage = decorators['notEmptyMessage'] 
        return addErrorAndReturn(notEmptyMessage);
      }

      const fieldValue = decorators['fieldValue'];
      const customErrorString = decorators['customErrorString'] 
      if (value !== fieldValue) {
        return addErrorAndReturn(customErrorString);
      }
    }
  }

  if (decorators['type'] === 'number') {
    if (typeof value !== 'number') {
      return addErrorAndReturn(`${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`);
    }

    if (value < decorators['min']) {
      return addErrorAndReturn(`${field} ${ErrorMessage.MIN} ${decorators['min']}`);
    }

    if (decorators['max'] && value > decorators['max']) {
      return addErrorAndReturn(`${field} ${ErrorMessage.MAX} ${decorators['max']}`);
    }
  }

  if (decorators['type'] === 'array') {
    if (!Array.isArray(value)) {
      return addErrorAndReturn(`${field} ${ErrorMessage.INVALID_TYPE_ARRAY}`);
    }

    if (decorators['minArray'] && value.length < decorators['minArray']) {
      return addErrorAndReturn(`${field} ${ErrorMessage.MIN_ARRAY} ${decorators['minArray']} items`);
    }

    if (decorators['maxArray'] && value.length > decorators['maxArray']) {
      return addErrorAndReturn(`${field} ${ErrorMessage.MAX_ARRAY} ${decorators['maxArray']} items`);
    }
  }

  if (decorators['type'] === 'enum') {
    const allowedValues = Object.values(decorators['enumType']);

    if (typeof value !== 'number') {
      return addErrorAndReturn(`${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`);
    }

    if (!allowedValues.includes(value)) {
      const filterNumber = allowedValues.filter((val) => typeof val === 'number');
      return addErrorAndReturn(`${field} ${ErrorMessage.INVALID_RANGE_NUMBER} ${filterNumber.join(', ')}`);
    }
  }

  return errors;
}


export function validateSingleError(dto: any): string[] {
  const errors: string[] = [];

  for (const field in dto) {
    const value = dto[field];
    const decorators = Reflect.getMetadata(field, dto) || {};

    const fieldErrors = mapError(field, value, decorators);
    if (fieldErrors.length > 0) {
      return fieldErrors; 
    }
  }

  return errors;
}