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
    variants.push(fieldValue);
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

  if (decorators['optional'] && value === undefined) {
    return errors;
  }

  if (
    decorators['notEmpty'] &&
    (value === undefined || value === null || value === '') &&
    !decorators['notEmptyMessage']
  ) {
    errors.push(`${field} ${ErrorMessage.EMPTY}`);
  }

  if (decorators['isDefined'] && (value === undefined || value === null)) {
    errors.push(`${field} ${ErrorMessage.DEFINED}`);
  }

  if (
    decorators['notEmptyMessage'] &&
    (value === undefined || value === null || value === '')
  ) {
    errors.push(decorators['notEmptyMessage']);
  }

  if (decorators['type'] === 'string') {
    if (typeof value !== 'string')
      errors.push(`${field} ${ErrorMessage.INVALID_TYPE_STRING}`);

    if (
      value === '' ||
      value === null ||
      value === undefined ||
      typeof value !== 'string'
    ) {
      value = -1;
      if (decorators['minLength'] && value < decorators['minLength'])
        errors.push(
          `${field} ${ErrorMessage.MIN_LENGTH} ${decorators['minLength']} characters`,
        );
    } else {
      if (decorators['minLength'] && value.length < decorators['minLength'])
        errors.push(
          `${field} ${ErrorMessage.MIN_LENGTH} ${decorators['minLength']} characters`,
        );
    }
  }

  if (decorators['type'] === 'number') {
    if (typeof value !== 'number')
      errors.push(`${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`);

    if (value < decorators['min']) {
      errors.push(`${field} ${ErrorMessage.MIN} ${decorators['min']}`);
    } else if (
      value === undefined ||
      value === '' ||
      value === null ||
      typeof value !== 'number'
    ) {
      errors.push(`${field} ${ErrorMessage.MIN} ${decorators['min']}`);
    }

    if (decorators['max'] && value > decorators['max']) {
      errors.push(`${field} ${ErrorMessage.MAX} ${decorators['max']}`);
    } else if (
      (value === undefined ||
        value === '' ||
        value === null ||
        typeof value !== 'number') &&
      decorators['max']
    ) {
      errors.push(`${field} ${ErrorMessage.MAX} ${decorators['max']}`);
    }
  }

  if (decorators['type'] === 'enum') {
    const allowedValues = Object.values(decorators['enumType']);

    if (typeof value !== 'number') {
      errors.push(`${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`);
    }

    if (!allowedValues.includes(value)) {
      const filterNumber = allowedValues.filter(
        (val) => typeof val === 'number',
      );

      errors.push(
        `${field} ${ErrorMessage.INVALID_RANGE_NUMBER} ${filterNumber.join(', ')}`,
      );
    }
  }

  return errors;
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

