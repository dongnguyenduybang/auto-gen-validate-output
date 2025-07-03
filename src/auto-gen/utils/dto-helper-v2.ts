import { ulid } from 'ulidx';
import { getUsedEnumValuesFromValidIf } from './dto-helper';
import { ErrorMessage, VAR } from '../enums';
import { checkRegexULID, checkURL, countEmojis, isEmoji } from './helper';
import { ValidIfCondition, ValidIfOptions } from './declarations';

export function generateStructuredErrorCases(
  dtoClass: any,
  payload: Record<string, any>,
) {
  const instance = new dtoClass();
  const keys = Object.keys(instance);

  if (keys.length === 0) {
    console.warn(`No found keys in DTO class: ${dtoClass.name}`);
    return [];
  }

  const validValues: Record<string, any> = {};
  const errorCasesByField: Record<string, any[]> = {};

  keys.forEach((field) => {
    const decorators = getDecorators(instance, field);
    const fieldValue =
      payload[field] !== undefined ? payload[field] : instance[field];

    validValues[field] = fieldValue;

    const variants = generateErrorVariantsForField(
      fieldValue,
      decorators,
      dtoClass,
      field,
    );

    console.log(`Field ${field} has ${variants.length} variants:`);
    console.log(variants);

    errorCasesByField[field] = Array.isArray(variants) ? variants : [];
  });

  const allTestCases = [];

  keys.forEach((rootField) => {
    const errorVariants = errorCasesByField[rootField];

    errorVariants.forEach((errorValue) => {
      const baseCase = { ...validValues };

      baseCase[rootField] = errorValue;

      const testCase = { ...baseCase };
      const errors = softErrorFromMap(testCase, dtoClass);

      allTestCases.push({
        body: testCase,
        expects: errors.length > 0 ? errors : [],
      });

      // keys.forEach((otherField) => {
      //   if (otherField !== rootField) {
      //     const otherErrorVariants = errorCasesByField[otherField];

      //     otherErrorVariants.forEach((otherErrorValue) => {
      //       const combinedCase = { ...baseCase };
      //       combinedCase[otherField] = otherErrorValue;

      //       const combinedErrors = softErrorFromMap(combinedCase, dtoClass);

      //       allTestCases.push({
      //         body: combinedCase,
      //         expects: combinedErrors.length > 0 ? combinedErrors : [],
      //       });
      //     });
      //   }
      // });
    });
  });


  const allValidCase = { ...validValues };

  const validErrors = softErrorFromMap(allValidCase, dtoClass);
  allTestCases.push({
    body: allValidCase,
    expects: validErrors.length > 0 ? validErrors : [],
  });
  // return allTestCases;
  return removeDuplicateTestCases(allTestCases);
}

function removeDuplicateTestCases(testCases: any[]) {
  const seen = new Set<string>();
  const uniqueTestCases = [];

  testCases.forEach((testCase) => {
    // Sắp xếp keys ở tất cả các cấp độ
    const normalizedBody = sortObjectKeys(testCase.body);
    const bodyString = JSON.stringify(normalizedBody);

    if (!seen.has(bodyString)) {
      seen.add(bodyString);
      uniqueTestCases.push(testCase);
    }
  });

  return uniqueTestCases;
}

function sortObjectKeys(obj: any): any {
  if (typeof obj !== 'object' || obj === null) return obj;

  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys);
  }

  const sortedObj: Record<string, any> = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sortedObj[key] = sortObjectKeys(obj[key]);
    });

  return sortedObj;
}

export function generateErrorCases(
  dtoClass: any,
  payload: Record<string, any>,
) {
  return generateStructuredErrorCases(dtoClass, payload);
}

const decoratorItemValidations = {
  IsString: {
    valid: () => ['valid_string'],
    invalid: () => [123],
  },
  IsULID: {
    valid: () => [ulid()],
  },
  IsUnique: {
    invalid: () => ['uniqueItem', 'uniqueItem'],
  },
  MinArrayItem: (length: number) => ({
    invalid: () => (length > 0 ? ['a'.repeat(length - 1)] : ['']),
  }),
  IsNotNull: {
    invalid: () => [null],
  },
  IsObject: {
    valid: () => [{}],
    invalid: () => ['string'],
  },
};

export function getDecorators(
  target: Object,
  propertyKey: string,
): Record<string, any> {
  const decorators: Record<string, any> = {};
  // Lấy metadata từ instance
  let metadataKeys = Reflect.getMetadataKeys(target, propertyKey);
  metadataKeys.forEach((key) => {
    decorators[key] = Reflect.getMetadata(key, target, propertyKey);
  });

  // Lấy metadata từ prototype
  metadataKeys = Reflect.getMetadataKeys(
    target.constructor.prototype,
    propertyKey,
  );
  metadataKeys.forEach((key) => {
    if (!decorators[key]) {
      decorators[key] = Reflect.getMetadata(
        key,
        target.constructor.prototype,
        propertyKey,
      );
    }
  });

  return decorators;
}

export function generateErrorVariantsForField(
  fieldValue: any,
  decorators: Record<string, any>,
  dtoClass: unknown,
  fieldName: string,
): unknown[] {
  const variants: unknown[] = [];
  // 2. Sai kiểu dữ liệu

  const fieldType = decorators['type'] || 'string';
  switch (fieldType) {
    case 'string':
      variants.push(123);
      variants.push(fieldValue);

      // 4. Vi phạm độ dài
      if (decorators['minLength']) {
        variants.push('a'.repeat(decorators['minLength'] - 1));
        if (decorators['genEmoji']) {
          const { emoji, quantity } = decorators['genEmoji'];
          variants.push(emoji.repeat(decorators['minLength'] - 1));
        }
      }
      if (decorators['maxLength']) {
        variants.push('a'.repeat(decorators['maxLength'] + 1));
        if (decorators['genEmoji']) {
          const { emoji, quantity } = decorators['genEmoji'];
          variants.push(emoji.repeat(decorators['maxLength'] + 1));
        }
      }
      break;
    case 'number':
      variants.push('invalid_number');

      // 3. Vi phạm min/max
      if (decorators['min'] !== undefined) {
        variants.push(decorators['min'] - 1);
      }
      if (decorators['max'] !== undefined) {
        variants.push(decorators['max'] + 1);
      }
      if (decorators['rangeNumber'] !== undefined) {
        const { start, end } = decorators['rangeNumber'];
        variants.push(start - 1)
        variants.push(end + 1)
      }
      break;
    case 'enum':
      variants.push('invalid_enum_value');
      variants.push(fieldValue);
      const usedEnumValues = getUsedEnumValuesFromValidIf(dtoClass, fieldName);
      if (usedEnumValues.length > 0) {
        usedEnumValues.forEach((enumValue) => {
          variants.push(enumValue);
        });
      }
      // variants.push('invalid_enum_value');

      break;
    case 'array':
      variants.push('not_an_array'); //invalid type array
      variants.push(fieldValue); // valid case

      if (decorators['minArray']) {
        variants.push(new Array(decorators['minArray'] - 1).fill(null));
      }
      if (decorators['maxArray']) {
        variants.push(new Array(decorators['maxArray'] + 1).fill(null));
      }

      const itemDecorators = decorators['itemDecorators'];
      if (!itemDecorators) {
        return;
      } else {
        itemDecorators.forEach((decorator: { name: string; params?: any }) => {
          const { name, params } = decorator;
          let filedPush = decoratorItemValidations[name];
          if (typeof filedPush === 'function' && params !== undefined) {
            filedPush = filedPush(params);
          }
          if (filedPush) {
            if (filedPush.invalid) {
              variants.push(filedPush.invalid());
            }
            if (filedPush.valid) {
              variants.push(filedPush.valid());
            }
          }
        });
      }
      if (decorators['isValidateNested']) {
        console.log('Processing nested array validation for:', fieldName);
        const nestedClass = getNestedClass(decorators);

        if (nestedClass && Array.isArray(fieldValue)) {
          const nestedVariants = generateNestedArrayVariants(
            fieldValue,
            nestedClass,
          );
          variants.push(...nestedVariants);
        } else {
          console.log('No nested class found or fieldValue is not array');
        }
      }
      break;
    case 'boolean':
      variants.push('invalid_boolean');
      variants.push(fieldValue);
      break;
  }

  if (decorators['isEmoji']) {
    const expectedCount = decorators['isEmoji'];
    variants.push(fieldValue.repeat(expectedCount + 1));
    variants.push(fieldValue.repeat(expectedCount - 1));
  }

  // 5. Vi phạm kích thước mảng

  if (decorators['optional']) {
    variants.push(undefined);
  }

  if (decorators['isDefined']) {
    variants.push(undefined)
  }

  if (decorators['notEmpty']) {
    variants.push('');
  }

  if (decorators['isNotNull']) {
    variants.push(null);
  }

  if (decorators['isULID']) {
    variants.push('invalid_ULID');
  }
  if (decorators['isInvalid']) {
    variants.push('invalid_value');
  }

  return [...new Set(variants)];
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
      payload,
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
      payload,
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
      payload,
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
      payload,
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
      payload,
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
      payload,
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
      payload,
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
      payload,
    );
    if (channelIdErrors.length > 0) {
      return ['Could not resolve permission type'];
    }
  }

  for (const field of Object.keys(payload)) {
    const value = payload[field];
    const decorators = getDecorators(instance, field);
    const fieldErrors = mapError(field, value, decorators, payload);
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

function addErrorIfNotExist(
  errors: string[],
  customMessage: string | null,
  defaultMessage: string,
) {
  const errorMessage = customMessage || defaultMessage;
  if (errorMessage && !errors.includes(errorMessage)) {
    errors.push(errorMessage);
  }
}

function checkOptional(
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  if (decorators['optional'] && value === undefined) {
    return [];
  }
  return null;
}

function checkValidIf(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
  payload: Record<string, any>,
) {
  if (!decorators['validIf']) return null;

  const options: ValidIfOptions = decorators['validIf'];
  const conditions = Array.isArray(options.conditions)
    ? options.conditions
    : [options.conditions];
  const logicalOperator = options.logicalOperator || 'AND';

  let conditionMet = false;

  if (logicalOperator === 'AND') {
    conditionMet = conditions.every((condition) =>
      evaluateCondition(condition, payload),
    );
  } else {
    conditionMet = conditions.some((condition) =>
      evaluateCondition(condition, payload),
    );
  }

  if (conditionMet) {
    if (options.result?.required === false) {
      return { isRequired: false };
    }
    if (options.result?.required === true) {
      return { isRequired: true };
    }
    if (options.result?.message) {
      return {
        message: options.result.message,
        isRequired: options.result.required,
      };
    }
  }

  return conditionMet ? null : { isRequired: false };
}

function evaluateCondition(
  condition: ValidIfCondition,
  payload: Record<string, any>,
): boolean {
  const targetValue = payload[condition.field];

  switch (condition.operator) {
    case '===':
      return targetValue === condition.value;
    case '!==':
      return targetValue !== condition.value;
    case '==':
      return targetValue == condition.value;
    case '!=':
      return targetValue != condition.value;
    case '>':
      return targetValue > condition.value;
    case '>=':
      return targetValue >= condition.value;
    case '<':
      return targetValue < condition.value;
    case '<=':
      return targetValue <= condition.value;
    case 'includes':
      return Array.isArray(targetValue)
        ? targetValue.includes(condition.value)
        : false;
    case 'in':
      return Array.isArray(condition.value)
        ? condition.value.includes(targetValue)
        : false;
    case 'regex':
      return new RegExp(condition.value).test(targetValue);
    default:
      throw new Error(`Unsupported operator: ${condition.operator}`);
  }
}
function getDefinedErrorMessage(field: string): string {
  switch (field) {
    case 'channelId':
      return ErrorMessage.UNSUPPORTED_PERMISSION_TYPE;
    case 'workspaceId':
      return ErrorMessage.COULD_NOT_PERMISSION;
    case 'userId':
      return ErrorMessage.COULD_NOT_PERMISSION;
    default:
      return `${field} ${ErrorMessage.DEFINED}`;
  }
}

function checkIsDefined(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (value === undefined) {
    if (decorators['isDefined']) {
      if (decorators['isInvalid']) {
        addErrorIfNotExist(
          errors,
          decorators['notUndefinedMessage'],
          getDefinedErrorMessage(field),
        );
      } else {
        addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.DEFINED}`);
      }
      return errors;
    }
  }
  return null;
}

function checkIsNotNull(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (value === null && decorators['isNotNull']) {
    if (decorators['IsInvalid']) {
      if (
        field === 'workspaceId' ||
        field === 'channelId' ||
        field === 'userId'
      ) {
        addErrorIfNotExist(
          errors,
          decorators['isNotNullMessage'],
          ErrorMessage.COULD_NOT_PERMISSION,
        );
      } else {
        addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.NULL}`);
      }
    } else {
      addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.NULL}`);
    }
  }
  return errors;
}

function checkTypeBoolean(
  field: string,
  value: any,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (
    decorators['type'] === 'boolean' &&
    typeof value !== 'boolean' &&
    value === null
  ) {
    addErrorIfNotExist(
      errors,
      null,
      `${field} ${ErrorMessage.INVALID_TYPE_BOOLEAN} null`,
    );
  }
  if (
    decorators['type'] === 'boolean' &&
    typeof value !== 'boolean' &&
    value !== null
  ) {
    addErrorIfNotExist(
      errors,
      null,
      `${field} ${ErrorMessage.INVALID_TYPE_BOOLEAN} ${typeof value}`,
    );
  }
  return errors;
}

function checkNotEmpty(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (value === '' && decorators['notEmpty']) {
    if (decorators['IsInvalid']) {
      if (
        field === 'workspaceId' ||
        field === 'channelId' ||
        field === 'userId'
      ) {
        addErrorIfNotExist(
          errors,
          decorators['notEmptyMessage'],
          ErrorMessage.COULD_NOT_PERMISSION,
        );
      } else {
        addErrorIfNotExist(
          errors,
          decorators['notEmptyMessage'],
          `${field} ${ErrorMessage.EMPTY}`,
        );
      }
    } else {
      addErrorIfNotExist(
        errors,
        decorators['notEmptyMessage'],
        `${field} ${ErrorMessage.EMPTY}`,
      );
    }
  }
  return errors;
}

function checkULID(
  field: string,
  value: any,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];

  if (decorators['isULID']) {
    if (typeof value !== 'string') {
      // ✅ Nếu không phải string, cũng lỗi
      addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_ULID}`);
    } else if (value === '') {
      addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_ULID}`);
    } else if (!value.startsWith('{{') && !checkRegexULID(value)) {
      addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_ULID}`);
    }
  }

  return errors;
}



function checkEmoji(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (decorators['isEmoji']) {
    if (typeof value !== 'string') {
      return errors;
    }
    if (decorators['isValidEmoji']) {
      const actualCount = countEmojis(value);
      const isInvalid = value === '' || !isEmoji(value);
      const isInvalidCount =
        actualCount > decorators['isValidEmoji'] ||
        actualCount < decorators['isValidEmoji'];

      if (isInvalid) {
        addErrorIfNotExist(
          errors,
          null,
          `${field} ${ErrorMessage.INVALID_EMOJI}`,
        );
      }
      if (isInvalidCount) {
        addErrorIfNotExist(
          errors,
          null,
          `${field} ${ErrorMessage.INVALID_RANGE_EMOJI} ${decorators['isValidEmoji']} emoji`,
        );
      }
    } else {
      const isInvalid = value === '' || !isEmoji(value);
      if (isInvalid) {
        addErrorIfNotExist(
          errors,
          null,
          `${field} ${ErrorMessage.INVALID_EMOJI}`,
        );
        addErrorIfNotExist(
          errors,
          null,
          `${field} ${ErrorMessage.INVALID_EMOJI_LENGTH_1}`,
        );
      }
    }
  }
  return errors;
}

function checkTypeString(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (value === undefined) {
    return [];
  }

  if (decorators['type'] === 'string') {
    if (typeof value !== 'string') {
      if (decorators['isInvalid']) {
        if (
          field === 'workspaceId' ||
          field === 'channelId' ||
          field === 'userId'
        ) {
          addErrorIfNotExist(errors, decorators['stringMessage'], null);
        } else if (decorators['isNotNull'] && typeof value === 'object') {
          addErrorIfNotExist(
            errors,
            decorators['stringMessage'],
            `${field} ${ErrorMessage.INVALID_TYPE_STRING} null`,
          );
        } else {
          addErrorIfNotExist(
            errors,
            decorators['stringMessage'],
            `${field} ${ErrorMessage.INVALID_TYPE_STRING} ${typeof value}`,
          );
        }
      } else {
        if (decorators['isNotNull'] && typeof value === 'object') {
          addErrorIfNotExist(
            errors,
            decorators['stringMessage'],
            `${field} ${ErrorMessage.INVALID_TYPE_STRING} null`,
          );
        } else {
          addErrorIfNotExist(
            errors,
            decorators['stringMessage'],
            `${field} ${ErrorMessage.INVALID_TYPE_STRING} ${typeof value}`,
          );
        }
      }

      errors.push(...checkULID(field, value, decorators));
      return errors;
    }

    if (decorators['isValidURL']) {
      const isInvalid =
        typeof value === 'string' && (value === '' || !checkURL(value));
      if (isInvalid) {
        addErrorIfNotExist(
          errors,
          null,
          `${field} ${ErrorMessage.INVALID_URL}`,
        );
      }
      return errors;
    }

    if (decorators['isInvalid']) {
      if (field === 'workspaceId' && value !== '0') {
        addErrorIfNotExist(
          errors,
          decorators['isInvalidMessage'],
          'Invalid channel',
        );
        return errors;
      }
      if (field === 'channelId' && !value.startsWith('{{')) {
        addErrorIfNotExist(
          errors,
          decorators['isInvalidMessage'],
          'Invalid channel',
        );
        return errors;
      }
      if (field === 'userId' && !value.startsWith('{{')) {
        addErrorIfNotExist(
          errors,
          decorators['isInvalidMessage'],
          'Unauthorized request',
        );
        return errors;
      }
      if (field === 'stickerId' && value !== VAR.stickerId && value != null && value !== "") {
        addErrorIfNotExist(errors, decorators['isInvalidMessage'], null);
        return errors;
      }
    }

    if (decorators['minLength'] || decorators['maxLength']) {
      const len = value.length;
      const hasMin = decorators['minLength'] != null;
      const hasMax = decorators['maxLength'] != null;
      //  if (hasMin && hasMax) {
      //       if (len < decorators['minLength'] || len > decorators['maxLength']) {
      //         addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_RANGE_STRING_LENGTH} ${decorators['minLength']} to ${decorators['maxLength']} length`);
      //       }
      //     } else
      if (hasMin && len < decorators['minLength']) {
        addErrorIfNotExist(
          errors,
          null,
          `${field} ${ErrorMessage.MIN_LENGTH} ${decorators['minLength']} character(s)`,
        );
      } else if (hasMax && len > decorators['maxLength']) {
        addErrorIfNotExist(
          errors,
          null,
          `${field} ${ErrorMessage.MAX_LENGTH} ${decorators['maxLength']} character(s)`,
        );
      }
    }
  }
  return errors;
}

function checkTypeNumber(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];

  if (decorators['type'] === 'number') {
    const isInvalidType = typeof value !== 'number' || isNaN(value);
    const isEmptyString = value === '';

    if (isInvalidType || isEmptyString) {
      const receivedNumber =
        typeof value === 'number' || typeof value === 'string'
          ? 'nan'
          : value;

      addErrorIfNotExist(
        errors,
        decorators['numberMessage'],
        `${field} ${ErrorMessage.INVALID_TYPE_NUMBER} ${receivedNumber}`,
      );
    }

    // ✅ Dù sai kiểu vẫn kiểm tra range để báo đầy đủ lỗi
    const numberValue =
      typeof value === 'number' ? value : Number(value);

    // Nếu là chuỗi rỗng hoặc parse không ra số → NaN → vẫn vào các check này
    if (decorators['min'] != null && numberValue < decorators['min']) {
      addErrorIfNotExist(
        errors,
        decorators['minMessage'],
        `${field} must be at least ${decorators['min']}`,
      );
    }

    if (decorators['max'] != null && numberValue > decorators['max']) {
      addErrorIfNotExist(
        errors,
        decorators['maxMessage'],
        `${field} must be at most ${decorators['max']}`,
      );
    }

    if (decorators['rangeNumber']) {
      const { start, end } = decorators['rangeNumber'];
      if (numberValue < start || numberValue > end) {
        addErrorIfNotExist(
          errors,
          decorators['rangeMessage'],
          `${field} ${ErrorMessage.INVALID_RANGE_NUMBER} ${start} to ${end}`,
        );
      }
    }
  }

  return errors;
}

function checkTypeArray(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];

  if (decorators['type'] === 'array') {
    if (!Array.isArray(value) && value === null) {
      addErrorIfNotExist(
        errors,
        decorators['arrayMessage'],
        `${field} ${ErrorMessage.INVALID_TYPE_ARRAY} null`,
      );
      return errors;
    } else if (!Array.isArray(value)) {
      addErrorIfNotExist(
        errors,
        decorators['arrayMessage'],
        `${field} ${ErrorMessage.INVALID_TYPE_ARRAY} ${typeof value}`,
      );
      return errors;
    }

    // Kiểm tra độ dài tối thiểu của mảng
    if (
      decorators['minArray'] != null &&
      value.length < decorators['minArray']
    ) {
      addErrorIfNotExist(
        errors,
        decorators['minArrayMessage'],
        `${field} ${ErrorMessage.MIN_ARRAY} ${decorators['minArray']} element(s)`,
      );
    }

    // Kiểm tra độ dài tối đa của mảng
    if (
      decorators['maxArray'] != null &&
      value.length > decorators['maxArray']
    ) {
      addErrorIfNotExist(
        errors,
        decorators['maxArrayMessage'],
        `${field} ${ErrorMessage.MAX_ARRAY} ${decorators['maxArray']} element(s)`,
      );
    }

    value.forEach((item: unknown, index: number) => {
      const typeItem = typeof item;
      const itemDecorator = decorators['itemDecorators'];
      if (!itemDecorator) return;
      itemDecorator.forEach(
        (dec: { name: string; params?: any; message?: string }) => {
          const { name, params, message } = dec;
          //check type
          if (name === 'IsObject' && typeof item !== 'object') {
            addErrorIfNotExist(
              errors,
              null,
              `${field} has element ${index} ${ErrorMessage.INVALID_TYPE_OBJ} ${typeof item}`,
            );
          }
          //check min item
          if (item === '' && name === 'MinArrayItem') {
            addErrorIfNotExist(
              errors,
              null,
              `${field} has element ${index} ${ErrorMessage.MIN_LENGTH} ${params} character(s)`,
            );
          }
          if (
            item === '' &&
            name === 'MinArrayItem' &&
            decorators['IsULID']
          ) {
            addErrorIfNotExist(
              errors,
              null,
              `${field} has element ${index} ${ErrorMessage.MIN_LENGTH} ${params} character(s)`,
            );
            addErrorIfNotExist(
              errors,
              null,
              `${field} has element ${index} ${ErrorMessage.INVALID_ULID}`,
            );
          }

          if (typeof item === 'string') {
            //check ulid
            if (name === 'IsULID' && !item.startsWith('{{')) {
              if (!checkRegexULID(item)) {
                addErrorIfNotExist(
                  errors,
                  null,
                  `${field} has element ${index} ${ErrorMessage.INVALID_ULID}`,
                );
              } else {
                addErrorIfNotExist(errors, message, `${field} ${message}`);
              }
            }
          } else {
            if (name === 'IsULID') {
              addErrorIfNotExist(
                errors,
                null,
                `${field} has element ${index} ${ErrorMessage.INVALID_ULID}`,
              );
            } else {
              addErrorIfNotExist(
                errors,
                null,
                `${field} has element ${index} ${ErrorMessage.INVALID_TYPE_STRING} ${typeof item}`,
              );
            }
          }


          //check unique item
          if (name === 'IsUnique') {
            const uniqueItems = new Set(value);
            if (uniqueItems.size !== value.length) {
              addErrorIfNotExist(
                errors,
                null,
                `${field} ${ErrorMessage.UNIQUE_ARRAY_ITEM}`,
              );
            }
          }
        },
      );

    });
  }

  if (decorators['isValidateNested'] && value !== undefined && value !== null) {
    const nestedErrors = checkNestedValidation(field, value, decorators);
    errors.push(...nestedErrors);
  }

  return errors;
}

function checkTypeObject(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (decorators['type'] === 'object') {
    if (typeof value !== 'object' || Array.isArray(value) || value === null) {
      addErrorIfNotExist(
        errors,
        decorators['objectMessage'],
        `${field} ${ErrorMessage.INVALID_TYPE_OBJ}`,
      );
      return errors;
    }
  }
  return errors;
}

function checkEnum(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (decorators['type'] === 'enum') {
    if (
      !decorators['enumType'] ||
      !Object.values(decorators['enumType']).includes(value)
    ) {
      const enumValues = Object.values(decorators['enumType']).filter(
        (v) => typeof v === 'number',
      ) as number[];

      const expectedText = enumValues.join(' | ');
      const receivedText = typeof value === 'string' ? 'nan' : value;
      // console.log(typeof value, expectedText,receivedText)
      addErrorIfNotExist(
        errors,
        decorators['enumMessage'],
        `${field} ${ErrorMessage.INVALID_ENUM} ${expectedText}, received ${receivedText}`,
      );
      return errors;
    }
  }

  return errors;
}

function checkValidURL(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  if (decorators['isValidURL']) {
    const isValid = checkURL(String(value));
    if (!isValid) {
      addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_URL}`);
    }
  }
  return errors;
}

export function mapError(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
  dto,
) {
  // Kiểm tra từng nhóm lỗi
  const errors: string[] = [];

  const validIfErrors = checkValidIf(field, value, decorators, dto);
  if (validIfErrors !== null) {
    if (validIfErrors.message) {
      errors.push(validIfErrors.message);
    }

    if (!validIfErrors.isRequired) {
      if (value === undefined || value === null) {
        return errors;
      }
    }
  } else {
    const optionalErrors = checkOptional(value, decorators);
    if (optionalErrors !== null) return optionalErrors;
  }

  const checks = [
    checkIsDefined,
    checkNotEmpty,
    checkULID,
    checkEmoji,
    checkTypeString,
    checkTypeNumber,
    checkTypeArray,
    checkTypeObject,
    checkEnum,
    checkValidURL,
    checkTypeBoolean,
    checkIsNotNull,
  ];

  for (const check of checks) {
    const result = check(field, value, decorators);
    if (result && result.length > 0) {
      errors.push(...result);
      if (
        check === checkIsNotNull ||
        check === checkTypeBoolean ||
        check === checkValidURL ||
        check === checkTypeString ||
        check === checkTypeNumber ||
        check === checkTypeArray ||
        check === checkTypeObject ||
        check === checkEnum
      ) {
        break;
      }
    }
  }

  return Array.from(new Set(errors));
}

function getNestedClass(decorators: Record<string, any>): any {
  // Ưu tiên lấy nestedType từ decorator Type
  if (decorators['nestedType']) {
    return decorators['nestedType'];
  }

  // Chỉ lấy design:type nếu nó không phải là Array
  if (decorators['design:type'] && decorators['design:type'] !== Array) {
    return decorators['design:type'];
  }

  return null;
}

function generateNestedArrayVariants(
  arrayValue: any[],
  nestedClass: any,
  depth: number = 0,
): unknown[] {
  const variants: unknown[] = [];
  console.log(
    'generateNestedArrayVariants called with:',
    arrayValue,
    nestedClass,
    'depth:',
    depth,
  );

  // Giới hạn độ sâu đệ quy
  if (depth > 5) {
    console.log('Max recursion depth reached');
    return variants;
  }

  if (!Array.isArray(arrayValue) || arrayValue.length === 0) {
    console.log('Array is empty or not array');
    return variants;
  }

  const templateObject = arrayValue[0];
  const nestedInstance = new nestedClass();
  const nestedFields = Object.keys(nestedInstance);

  nestedFields.forEach((nestedField) => {
    const nestedDecorators = getDecorators(nestedInstance, nestedField);
    const nestedValue =
      templateObject?.[nestedField] || nestedInstance[nestedField];

    if (
      nestedDecorators['isValidateNested'] &&
      nestedDecorators['nestedType']
    ) {
      const subNestedClass = getNestedClass(nestedDecorators);
      if (subNestedClass && nestedValue && subNestedClass !== nestedClass) {
        const subNestedVariants = generateNestedArrayVariants(
          [nestedValue],
          subNestedClass,
          depth + 1,
        );
        subNestedVariants.forEach((subVariant) => {
          const errorArray = arrayValue.map((item, index) => {
            if (index === 0) {
              return { ...item, [nestedField]: subVariant[0] };
            }
            return item;
          });
          variants.push(errorArray);
        });
      } else {
        console.log(
          'Skipping recursion: invalid subNestedClass or same as nestedClass',
        );
      }
    } else {
      // Tạo error variants cho field này
      const fieldVariants = generateErrorVariantsForField(
        nestedValue,
        nestedDecorators,
        nestedClass,
        nestedField,
      );
      console.log('Field variants for', nestedField, ':', fieldVariants);

      fieldVariants.forEach((errorValue) => {
        // Tạo array với object có lỗi ở field này
        const errorArray = arrayValue.map((item, index) => {
          if (index === 0) {
            return { ...item, [nestedField]: errorValue };
          }
          return item;
        });
        variants.push(errorArray);
      });

      // Tạo object với field bị thiếu (nếu field không optional)
      if (!nestedDecorators['optional']) {
        const missingFieldArray = arrayValue.map((item, index) => {
          if (index === 0) {
            const newItem = { ...item };
            delete newItem[nestedField];
            return newItem;
          }
          return item;
        });
        variants.push(missingFieldArray);
      }
    }
  });

  return variants;
}

function checkNestedValidation(
  field: string,
  value: unknown,
  decorators: Record<string, any>,
): string[] {
  const errors: string[] = [];
  const nestedClass = getNestedClass(decorators);

  if (!nestedClass) {
    console.log('No nested class found for field:', field);
    return errors;
  }
  // Xử lý nested array
  if (decorators['type'] === 'array' && Array.isArray(value)) {
    value.forEach((item, index) => {
      if (item && typeof item === 'object') {
        const nestedErrors = validateNestedObject(
          item,
          nestedClass,
          `${field}[${index}]`,
        );
        errors.push(...nestedErrors);
      }
    });
  }
  // Xử lý nested object
  else if (
    decorators['type'] === 'object' &&
    value &&
    typeof value === 'object'
  ) {
    const nestedErrors = validateNestedObject(value, nestedClass, field);
    errors.push(...nestedErrors);
  } else {
    const nestedErrors = validateNestedObject(value, nestedClass, field);
    errors.push(...nestedErrors);
  }

  return errors;
}

function validateNestedObject(
  obj: any,
  nestedClass: any,
  parentField: string,
): string[] {
  const errors: string[] = [];
  const nestedInstance = new nestedClass();
  const nestedFields = Object.keys(nestedInstance);

  nestedFields.forEach((nestedField) => {
    const nestedValue = obj[nestedField];
    const nestedDecorators = getDecorators(nestedInstance, nestedField);
    const fieldErrors = mapError(
      nestedField,
      nestedValue,
      nestedDecorators,
      obj,
    );
    errors.push(...fieldErrors);
  });

  return errors;
}
