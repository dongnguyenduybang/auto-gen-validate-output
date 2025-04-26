import 'reflect-metadata';
import { ErrorMessage } from '../enums/error-message.enum';
import { checkULID, isSingleEmoji } from './helper';

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
      variants.push(fieldValue);
      variants.push('check_ulid');
      break;
    case 'number':
      variants.push('invalid_number');
      variants.push(NaN);
      break;
    case 'enum':
      variants.push('invalid_enum_value');
      variants.push(fieldValue);
      break;
    case 'array':
      variants.push('not_an_array');
      variants.push([123]);
      variants.push(fieldValue);
      break;
    case 'boolean':
      variants.push('invalid_boolean');
      variants.push(fieldValue);
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
  // variants.push(fieldValue);

  if (!decorators['optional']) {
    variants.push(undefined);
  }

  if (decorators['notEmpty']) {
    variants.push('');
  }

  if (decorators['notNull']) {
    variants.push('');
  }

  return [...new Set(variants)];
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
  // Helper function để thêm lỗi
  const addError = (
    customMessage: string | undefined,
    defaultMessage: string,
  ) => {
    const errorMessage = customMessage || defaultMessage;
    if (errorMessage && !errors.includes(errorMessage)) {
      errors.push(errorMessage);
    }
  };

  // 1. Kiểm tra optional
  if (decorators['optional'] && (value === undefined || value === null)) {
    return errors;
  }

  // 2. Kiểm tra isDefined
  if (value === undefined || value === null) {
    if (decorators['isDefined']) {
      if (decorators['isChecked']) {
        if (field === 'channelId') {
          addError(
            decorators['isDefinedMessage'],
            'Unsupported permission type',
          );
        } else if (field === 'workspaceId' || field === 'userId') {
          addError(
            decorators['isDefinedMessage'],
            'Could not resolve permission type',
          );
        } else {
          addError(
            decorators['isDefinedMessage'],
            `${ErrorMessage.DEFINED} '${field}'`,
          );
        }
      } else {
        addError(
          decorators['isDefinedMessage'],
          `${ErrorMessage.DEFINED} '${field}'`,
        );
      }
      return errors;
    }
  }

  // 3. Kiểm tra notEmpty
  if (value === '' && decorators['notEmpty']) {
    if (decorators['isChecked']) {
      if (
        field === 'workspaceId' ||
        field === 'channelId' ||
        field === 'userId'
      ) {
        addError(
          decorators['notEmptyMessage'],
          'Could not resolve permission type',
        );
      } else {
        addError(
          decorators['notEmptyMessage'],
          `${ErrorMessage.DEFINED} '${field}'`,
        );
      }
    } else {
      addError(
        decorators['notEmptyMessage'],
        `${field} ${ErrorMessage.EMPTY}`
      );
    }

    // `${field} ${ErrorMessage.INVALID_RANGE_STRING_LENGTH} ${decorators['minLength']} to ${decorators['maxLength']} length`
    // return errors;
  }

  // 5. Kiểm tra ULID
  if (decorators['isULID']) {
    if (typeof value !== 'string') {
      addError(null, `${field} ${ErrorMessage.INVALID_ULID}`);
    } else if (
      typeof value === 'string' &&
      (value === '' || !value.startsWith('{{'))
    ) {
      addError(null, `${field} ${ErrorMessage.INVALID_ULID}`);
    } else if (typeof value === 'string' && !checkULID(value)) {
      addError(null, `${field} ${ErrorMessage.INVALID_ULID}`);
    }
  }

  // 6. Kiểm tra emoji
  if (decorators['isEmoji']) {
    const isInvalid =
      typeof value === 'string' && (value === '' || !isSingleEmoji(value));
    if (isInvalid) {
      addError(null, `${field} ${ErrorMessage.INVALID_EMOJI}`);
    }
  }

  // 4. Kiểm tra kiểu string và các điều kiện liên quan
  if (decorators['type'] === 'string') {
    if (typeof value !== 'string') {
      if (decorators['isChecked']) {
        if (
          field === 'workspaceId' ||
          field === 'channelId' ||
          field === 'userId'
        ) {
          addError(decorators['stringMessage'], null);
        } else {
          addError(
            decorators['stringMessage'],
            `${field} ${ErrorMessage.INVALID_TYPE_STRING}`,
          );
        }
      } else {
        addError(
          decorators['stringMessage'],
          `${field} ${ErrorMessage.INVALID_TYPE_STRING}`,
        );
      }
      return errors;
    }

    if (typeof value === 'string' && decorators['isChecked']) {
      const isWorkspaceInvalid = field === 'workspaceId' && value !== '0';
      const isChannelInvalid = field === 'channelId' && !value.startsWith('{{');
      const isUserInvalid = field === 'userId' && !value.startsWith('{{');

      if (isWorkspaceInvalid) {
        addError(decorators['isCheckedMessage'], 'Invalid channel');
        return errors;
      }

      if (isChannelInvalid) {
        addError(decorators['isCheckedMessage'], 'Invalid channel');
        return errors;
      }
      if (isUserInvalid) {
        addError(decorators['isCheckedMessage'], 'Unauthorized request');
        return errors;
      }
    }

    // Kiểm tra độ dài chuỗi (minLength, maxLength)
    if (decorators['minLength'] || decorators['maxLength']) {
      const len = value.length;
      const hasMin = decorators['minLength'] != null;
      const hasMax = decorators['maxLength'] != null;

      if (hasMin && hasMax) {
        const minViolated = len < decorators['minLength'];
        const maxViolated = len > decorators['maxLength'];
        if (minViolated || maxViolated) {
          addError(
            null,
            `${field} ${ErrorMessage.INVALID_RANGE_STRING_LENGTH} ${decorators['minLength']} to ${decorators['maxLength']} length`,
          );
        }
      } else if (hasMin && len < decorators['minLength']) {
        addError(
          null,
          `${field} ${ErrorMessage.MIN_LENGTH} ${decorators['minLength']} length`,
        );
      } else if (hasMax && len > decorators['maxLength']) {
        addError(
          null,
          `${field} ${ErrorMessage.MAX_LENGTH} ${decorators['maxLength']} length`,
        );
      }
    }
  }

  // 5. Kiểm tra kiểu number
  if (decorators['type'] === 'number') {
    if (typeof value !== 'number' || isNaN(value)) {
      addError(
        decorators['numberMessage'],
        `${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`,
      );
      return errors;
    }

    const minViolated = decorators['min'] && value < decorators['min'];
    const maxViolated = decorators['max'] && value > decorators['max'];
    if (minViolated) {
      addError(
        decorators['minMessage'],
        `${field} must be at least ${decorators['min']}`,
      );
    }
    if (maxViolated) {
      addError(
        decorators['maxMessage'],
        `${field} must be at most ${decorators['max']}`,
      );
    }
  }

  // 6. Kiểm tra kiểu array
  if (decorators['type'] === 'array') {
    if (!Array.isArray(value)) {
      addError(
        decorators['arrayMessage'],
        `${field} ${ErrorMessage.INVALID_TYPE_ARRAY}`,
      );
      return errors;
    }

    if (decorators['minArray'] && value.length < decorators['minArray']) {
      addError(
        decorators['minArrayMessage'],
        `${field} must have at least ${decorators['minArray']} items`,
      );
    }
    if (decorators['maxArray'] && value.length > decorators['maxArray']) {
      addError(
        decorators['maxArrayMessage'],
        `${field} must have at most ${decorators['maxArray']} items`,
      );
    }
  }

  // 7. Kiểm tra kiểu object
  if (decorators['type'] === 'object') {
    if (typeof value !== 'object' || Array.isArray(value) || value === null) {
      addError(
        decorators['objectMessage'],
        `${field} ${ErrorMessage.INVALID_TYPE_OBJ}`,
      );
      return errors;
    }
  }

  // 8. Kiểm tra enum
  if (decorators['type'] === 'enum') {
    if (
      !decorators['enumType'] ||
      !Object.values(decorators['enumType']).includes(value)
    ) {
      addError(
        decorators['enumMessage'],
        `${field} ${ErrorMessage.INVALID_ENUM}`,
      );
      return errors;
    }
  }

  return errors;
}
export function softErrorFromMap(
  payload: Record<string, any>,
  dtoClass: any,
): string[] {
  const errors: string[] = [];
  const instance = new dtoClass();

  const ERROR_PRIORITY = [
    'Could not resolve permission type',
    'Unsupported permission type',
    'Invalid channel',
    'Unauthorized request',
  ];

  // kiểm tra các trường hợp
  const workspaceId = payload['workspaceId'];
  const channelId = payload['channelId'];
  const isWorkspaceString = typeof workspaceId === 'string';
  const isWorkspaceEmpty = isWorkspaceString && workspaceId === '';
  const isWorkspaceZero = workspaceId === '0';
  const isChannelUndefined =
    !payload.hasOwnProperty('channelId') || channelId === undefined;
  const isChannelString = typeof channelId === 'string';
  const isChannelEmpty = isChannelString && channelId === '';
  const isChannelValidFormat = isChannelString && channelId.startsWith('{{');

  // trường hợp: workspaceId là chuỗi rỗng, channelId là chuỗi bất kỳ
  if (isWorkspaceEmpty) {
    const workspaceIdDecorators = getDecorators(instance, 'workspaceId');
    const workspaceIdErrors = mapError(
      'workspaceId',
      workspaceId,
      workspaceIdDecorators,
    );
    if (workspaceIdErrors.length > 0) {
      return ['Could not resolve permission type'];
    }
  }

  // trường hợp: workspaceId = "0", channelId là chuỗi rỗng
  if (isWorkspaceZero && isChannelEmpty) {
    const channelIdDecorators = getDecorators(instance, 'channelId');
    const channelIdErrors = mapError(
      'channelId',
      channelId,
      channelIdDecorators,
    );
    if (channelIdErrors.length > 0) {
      return ['Could not resolve permission type'];
    }
  }

  // trường hợp: workspaceId là string, channelId undefined (trừ workspaceId rỗng)
  if (isWorkspaceString && !isWorkspaceEmpty && isChannelUndefined) {
    const channelIdDecorators = getDecorators(instance, 'channelId');
    const channelIdErrors = mapError(
      'channelId',
      undefined,
      channelIdDecorators,
    );
    if (channelIdErrors.length > 0) {
      return ['Unsupported permission type'];
    }
  }

  // trường hợp: workspaceId không phải string, channelId undefined
  if (!isWorkspaceString && workspaceId !== undefined && isChannelUndefined) {
    const channelIdDecorators = getDecorators(instance, 'channelId');
    const channelIdErrors = mapError(
      'channelId',
      undefined,
      channelIdDecorators,
    );
    if (channelIdErrors.length > 0) {
      return ['Could not resolve permission type'];
    }
  }

  // trường hợp workspaceId undefined, channelId undefined
  if (workspaceId === undefined && isChannelUndefined) {
    const workspaceIdDecorators = getDecorators(instance, 'workspaceId');
    const workspaceIdErrors = mapError(
      'workspaceId',
      undefined,
      workspaceIdDecorators,
    );
    if (workspaceIdErrors.length > 0) {
      return ['Could not resolve permission type'];
    }
  }

  // trường hợp workspaceId = "0", channelId string không bắt đầu bằng {{}}
  if (
    isWorkspaceZero &&
    isChannelString &&
    !isChannelEmpty &&
    !isChannelValidFormat
  ) {
    const channelIdDecorators = getDecorators(instance, 'channelId');
    const channelIdErrors = mapError(
      'channelId',
      channelId,
      channelIdDecorators,
    );
    if (channelIdErrors.length > 0) {
      return ['Invalid channel'];
    }
  }

  // trường hợp workspaceId string ≠ "0", channelId string bắt đầu bằng "{{"
  if (
    isWorkspaceString &&
    !isWorkspaceZero &&
    !isWorkspaceEmpty &&
    isChannelValidFormat
  ) {
    const workspaceIdDecorators = getDecorators(instance, 'workspaceId');
    const workspaceIdErrors = mapError(
      'workspaceId',
      workspaceId,
      workspaceIdDecorators,
    );
    if (workspaceIdErrors.length > 0) {
      return ['Invalid channel'];
    }
  }

  // trường hợp workspaceId = "0", channelId không phải string
  if (isWorkspaceZero && channelId !== undefined && !isChannelString) {
    const channelIdDecorators = getDecorators(instance, 'channelId');
    const channelIdErrors = mapError(
      'channelId',
      channelId,
      channelIdDecorators,
    );
    if (channelIdErrors.length > 0) {
      return ['Could not resolve permission type'];
    }
  }

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

  return errors;
}
