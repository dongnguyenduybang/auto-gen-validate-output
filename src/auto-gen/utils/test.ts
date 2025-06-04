function checkOptional(value: unknown, decorators: Record<string, any>): string[] {
    if (decorators['optional'] && (value === undefined)) {
        return [];
    }
    return null;
}

function checkValidIf(
    field: string,
    value: unknown,
    decorators: Record<string, any>,
    payload: Record<string, any>
) {
    if (!decorators['validIf']) return null;

    const options: ValidIfOptions = decorators['validIf'];
    const conditions = Array.isArray(options.conditions) ? options.conditions : [options.conditions];
    const logicalOperator = options.logicalOperator || 'AND';

    let conditionMet = false;

    if (logicalOperator === 'AND') {
        conditionMet = conditions.every(condition => evaluateCondition(condition, payload));
    } else {
        conditionMet = conditions.some(condition => evaluateCondition(condition, payload));
    }

    if (conditionMet) {
        if (options.result?.required === false) {
            return { isRequired: false };
        }
        if (options.result?.required === true) {
            return { isRequired: true };
        }
        if (options.result?.message) {
            return { message: options.result.message, isRequired: options.result.required };
        }
    }

    return conditionMet ? null : { isRequired: false };
}

function evaluateCondition(condition: ValidIfCondition, payload: Record<string, any>): boolean {
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
            return Array.isArray(targetValue) ? targetValue.includes(condition.value) : false;
        case 'in':
            return Array.isArray(condition.value) ? condition.value.includes(targetValue) : false;
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
            return `${ErrorMessage.DEFINED} '${field}'`;
    }
}

function checkIsDefined(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (value === undefined) {
        if (decorators['isDefined']) {
            if (decorators['isInvalid']) {
                addErrorIfNotExist(errors, decorators['notUndefinedMessage'], getDefinedErrorMessage(field));
            } else {
                addErrorIfNotExist(errors, decorators['notUndefinedMessage'], `${field} ${ErrorMessage.DEFINED}`);
            }
            return errors;
        }
    }
    return null;
}

function checkIsNotNull(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (value === null && decorators['isNotNull']) {
        if (decorators['IsInvalid']) {
            if (field === 'workspaceId' || field === 'channelId' || field === 'userId') {
                addErrorIfNotExist(errors, decorators['isNotNullMessage'], ErrorMessage.COULD_NOT_PERMISSION);
            } else {
                addErrorIfNotExist(errors, decorators['isNotNullMessage'], `${field} ${ErrorMessage.NULL}`);
            }
        } else {
            addErrorIfNotExist(errors, decorators['isNotNullMessage'], `${field} ${ErrorMessage.NULL}`);
        }
    }
    return errors;
}


function checkTypeBoolean(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (decorators['type'] === 'boolean' && typeof value !== 'boolean') {
        addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_TYPE_BOOLEAN} ${typeof value}`);
    }

    return errors
}

function checkNotEmpty(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (value === '' && decorators['notEmpty']) {
        if (decorators['IsInvalid']) {
            if (field === 'workspaceId' || field === 'channelId' || field === 'userId') {
                addErrorIfNotExist(errors, decorators['notEmptyMessage'], ErrorMessage.COULD_NOT_PERMISSION);
            } else {
                addErrorIfNotExist(errors, decorators['notEmptyMessage'], `${field} ${ErrorMessage.EMPTY}`);
            }
        } else {
            addErrorIfNotExist(errors, decorators['notEmptyMessage'], `${field} ${ErrorMessage.EMPTY}`);
        }
    }
    return errors;
}

function checkULID(field: string, value: any, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (decorators['isULID']) {
        if (typeof value === 'string' && (value === '' || !value.startsWith('{{'))) {
            addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_ULID}`);
        } else if (typeof value === 'string' && !value.startsWith('{{') && !checkRegexULID(value)) {
            addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_ULID}`);
        }
    }
    return errors;
}
function checkEmoji(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (decorators['isEmoji']) {
        if (typeof value !== 'string') {
            return errors;
        }
        if (decorators['isValidEmoji']) {
            const actualCount = countEmojis(value);
            const isInvalid = value === '' || !isEmoji(value);
            const isInvalidCount = actualCount > decorators['isValidEmoji'] || actualCount < decorators['isValidEmoji'];

            if (isInvalid) {
                addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_EMOJI}`);
            }
            if (isInvalidCount) {
                addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_RANGE_EMOJI} ${decorators['isValidEmoji']} emoji`);
            }
        } else {
            const isInvalid = value === '' || !isEmoji(value);
            if (isInvalid) {
                addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_EMOJI}`);
                addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_EMOJI_LENGTH_1}`);
            }
        }
    }
    return errors;
}
function checkTypeString(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (value === undefined) {
        return [];
    }

    if (decorators['type'] === 'string') {
        if (typeof value !== 'string') {
            if (decorators['isInvalid']) {
                if (field === 'workspaceId' || field === 'channelId' || field === 'userId') {
                    addErrorIfNotExist(errors, decorators['stringMessage'], null);
                } else {
                    addErrorIfNotExist(errors, decorators['stringMessage'], `${field} ${ErrorMessage.INVALID_TYPE_STRING} ${typeof value}`);
                }
            } else {
                addErrorIfNotExist(errors, decorators['stringMessage'], `${field} ${ErrorMessage.INVALID_TYPE_STRING} ${typeof value}`);
            }
            return errors;
        }

        if (decorators['isValidURL']) {
            const isInvalid = typeof value === 'string' && (value === '' || !checkURL(value));
            if (isInvalid) {
                addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_URL}`);
            }
            return errors;
        }

        if (decorators['isInvalid']) {

            if (field === 'workspaceId' && value !== '0') {

                addErrorIfNotExist(errors, decorators['isInvalidMessage'], 'Invalid channel');
                return errors;
            }
            if (field === 'channelId' && !value.startsWith('{{')) {

                addErrorIfNotExist(errors, decorators['isInvalidMessage'], 'Invalid channel');
                return errors;
            }
            if (field === 'userId' && !value.startsWith('{{')) {
                addErrorIfNotExist(errors, decorators['isInvalidMessage'], 'Unauthorized request');
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
                addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.MIN_LENGTH} ${decorators['minLength']} character(s)`);
            } else if (hasMax && len > decorators['maxLength']) {
                addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.MAX_LENGTH} ${decorators['maxLength']} character(s)`);
            }
        }
    }
    return errors;
}
function checkTypeNumber(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (decorators['type'] === 'number') {
        if (typeof value !== 'number' || isNaN(value)) {
            addErrorIfNotExist(errors, decorators['numberMessage'], `${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`);
            return errors;
        }
        if (decorators['min'] != null && value < decorators['min']) {
            addErrorIfNotExist(errors, decorators['minMessage'], `${field} must be at least ${decorators['min']}`);
        }
        if (decorators['max'] != null && value > decorators['max']) {
            addErrorIfNotExist(errors, decorators['maxMessage'], `${field} must be at most ${decorators['max']}`);
        }
    }
    return errors;
}

function checkTypeArray(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];

    if (decorators['type'] === 'array') {
        // Kiểm tra xem giá trị có phải là mảng không
        if (!Array.isArray(value)) {
            addErrorIfNotExist(
                errors,
                decorators['arrayMessage'],
                `${field} ${ErrorMessage.INVALID_TYPE_ARRAY} ${typeof value}`
            );
            return errors;
        }

        // Kiểm tra độ dài tối thiểu của mảng
        if (decorators['minArray'] != null && value.length < decorators['minArray']) {
            addErrorIfNotExist(
                errors,
                decorators['minArrayMessage'],
                `${field} ${ErrorMessage.MIN_ARRAY} ${decorators['minArray']} element(s)`
            );
        }

        // Kiểm tra độ dài tối đa của mảng
        if (decorators['maxArray'] != null && value.length > decorators['maxArray']) {
            addErrorIfNotExist(
                errors,
                decorators['maxArrayMessage'],
                `${field} ${ErrorMessage.MAX_ARRAY} ${decorators['maxArray']} element(s)`
            );
        }

        value.forEach((item: unknown, index: number) => {
            if (typeof item === 'string') {

                const itemDecorator = decorators['itemDecorators'];
                itemDecorator.forEach((dec: { name: string; params?: any; message?: string }) => {
                    const { name, params, message } = dec;

                    //check type
                    if (typeof item !== 'string' && name === 'IsString') {

                    }

                    //check min item
                    if (item === "" && name === 'MinArrayItem') {
                        addErrorIfNotExist(
                            errors,
                            null,
                            `${field} has element ${index} ${ErrorMessage.MIN_LENGTH} ${params} character(s)`
                        )
                        addErrorIfNotExist(
                            errors,
                            null,
                            `${field} has element ${index} ${ErrorMessage.INVALID_ULID}`
                        )
                    }
                    //check ulid
                    if (name === 'IsULID' && !checkRegexULID(item) && !item.startsWith('{{')) {
                        addErrorIfNotExist(
                            errors,
                            null,
                            `${field} has element ${index} ${ErrorMessage.INVALID_ULID}`
                        )
                    }
                    if (name === 'IsULID' && checkRegexULID(item) && !item.startsWith('{{')) {
                        console.log(item, value)
                        addErrorIfNotExist(
                            errors,
                            null,
                            `${field} ${message}`
                        )
                    }

                    //check unique item
                    if (name === 'IsUnique') {
                        const uniqueItems = new Set(value);
                        if (uniqueItems.size !== value.length) {
                            addErrorIfNotExist(
                                errors,
                                decorators['uniqueMessage'],
                                `${field} ${ErrorMessage.UNIQUE_ARRAY_ITEM}`
                            );
                        }
                    }

                });

            } else {
                addErrorIfNotExist(
                    errors,
                    null,
                    `${field} has element ${index} ${ErrorMessage.INVALID_TYPE_STRING} ${typeof item}`
                )
            }
        });
    }

    return errors;
}

function checkTypeObject(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (decorators['type'] === 'object') {
        if (typeof value !== 'object' || Array.isArray(value) || value === null) {
            addErrorIfNotExist(errors, decorators['objectMessage'], `${field} ${ErrorMessage.INVALID_TYPE_OBJ}`);
            return errors;
        }
    }
    return errors;
}

function checkEnum(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (decorators['type'] === 'enum') {
        if (!decorators['enumType'] || !Object.values(decorators['enumType']).includes(value)) {

            const enumValues = Object.values(decorators['enumType']).filter(v => typeof v === 'number') as number[];
            const expectedText = enumValues.join(' | ');
            addErrorIfNotExist(errors, decorators['enumMessage'], `${field} ${ErrorMessage.INVALID_ENUM} ${expectedText}, received '${value}'`);
            return errors;
        }
    }
    return errors;
}

function checkValidURL(field: string, value: unknown, decorators: Record<string, any>): string[] {
    const errors: string[] = [];
    if (decorators['isValidURL']) {
        const isValid = checkURL(String(value))
        if (!isValid) {
            addErrorIfNotExist(errors, null, `${field} ${ErrorMessage.INVALID_URL}`);
        }
    }
    return errors
}

export function mapError(field: string, value: unknown, decorators: Record<string, any>, dto) {
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
        checkIsNotNull
    ];

    for (const check of checks) {
        const result = check(field, value, decorators);
        if (result && result.length > 0) {
            errors.push(...result);
            if (check === checkIsNotNull || check === checkTypeBoolean || check === checkValidURL || check === checkTypeString || check === checkTypeNumber || check === checkTypeArray || check === checkTypeObject || check === checkEnum) {
                break;
            }
        }
    }

    return Array.from(new Set(errors));
}
