import 'reflect-metadata';
import { ErrorMessage } from '../dtos/enums/error-message.enum';

export function getDecorators(target: any, propertyKey: string): Record<string, any> {
    const decorators: Record<string, any> = {};

    const metadataKeys = Reflect.getMetadataKeys(target, propertyKey);

    metadataKeys.forEach((key) => {
        const value = Reflect.getMetadata(key, target, propertyKey);
        decorators[key] = value;
    });

    return decorators;
}

export function generateErrorVariantsForField(fieldValue: any, decorators: Record<string, any>): any[] {
    const variants: any[] = [];

    if (!decorators['optional']) {
        variants.push(undefined);
    }

    if (decorators['min'] && fieldValue < decorators['min']) {
        variants.push(fieldValue - 1);
    }
    if (decorators['max'] && fieldValue > decorators['max']) {
        variants.push(fieldValue + 1);
    }

    if (decorators['notNull']) variants.push(null);
    if (decorators['notEmpty']) variants.push('');


    const typeHandlers: Record<string, () => void> = {
        number: () => {
            variants.push('random_string');
            variants.push(fieldValue)
        },
        string: () => {
            variants.push(123456789);
            variants.push(fieldValue)
        },
        array: () => {
            variants.push('random_string');
            variants.push(fieldValue)
        },
        boolean: () => {
            variants.push('random_string');
            variants.push(fieldValue)
        },
        date: () => {
            variants.push('random_string');
            variants.push(fieldValue)
        },
        any: () => { },
        object: () => {
            variants.push('random_string');
            variants.push(fieldValue);
        },
        enum: () => {
            variants.push('random_string');
            variants.push(fieldValue);
        }
    };

    if (decorators['type']) {
        console.log('decorators type', decorators['type']);
        if (typeHandlers[decorators['type']]) {
            typeHandlers[decorators['type']]();
        } else {
            console.error(`No handler found for type: ${decorators['type']}`);
        }
    }

    return variants;
}

export function combineFields(arrays: any[][]): any[][] {
    return arrays.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
}

export function generateCombinations(fields: string[], errorCasesByField: Record<string, any[]>): any[] {
    const fieldErrorVariants = fields.map((field) => {
        return errorCasesByField[field].map((errorVariant) => ({ [field]: errorVariant }));
    });

    return combineFields(fieldErrorVariants).map((combination) => {
        return combination.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    });
}

export function mapErrorToEnum(field: string, value: any, decorators: Record<string, any>): string | null {

    if (value === undefined && decorators['optional'] !== true) {
        return `${field} ${ErrorMessage.UNDEFINED}`;
    }

    if (value === null && decorators['notNull']) {
        return `${field} ${ErrorMessage.NULL}`;
    }

    if (value === '' && decorators['notEmpty']) {
        return `${field} ${ErrorMessage.EMPTY}`;
    }

    if (decorators['isAny']) {
        return null;
    }


    if (decorators['type'] === 'string') {

        if (decorators['minLength'] && typeof value === 'string' && value.length <= decorators['minLength']) {
            return `${field} ${ErrorMessage.MIN_LENGTH} ${decorators['minLength']}`;
        }

        if (decorators['maxLength'] && typeof value === 'string' && value.length > decorators['maxLength']) {

            return `${field} ${ErrorMessage.MAX_LENGTH} ${decorators['maxLength']}`;
        }

        if (typeof value !== 'string') {
            return `${field} ${ErrorMessage.INVALID_TYPE_STRING}`;
        }
    }

    if (decorators['type'] === 'number') {
        if (typeof value !== 'number') {
            return `${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`;
        }
        if (decorators['min'] && value < decorators['min']) {
            return `${field} ${ErrorMessage.MIN} ${decorators['min']}`;
        }
        if (decorators['max'] && value > decorators['max']) {
            return `${field} ${ErrorMessage.MAX} ${decorators['max']}`;
        }
    }

    if (decorators['type'] === 'array') {
        if (!Array.isArray(value)) {
            return `${field} ${ErrorMessage.INVALID_TYPE_ARRAY}`;
        }
        if (decorators['minArray'] && value.length < decorators['minArray']) {
            return `${field} ${ErrorMessage.MIN_ARRAY} ${decorators['minArray']}`;
        }
        if (decorators['maxArray'] && value.length > decorators['maxArray']) {
            return `${field} ${ErrorMessage.MAX_ARRAY} ${decorators['maxArray']}`;
        }
    }

    if (decorators['type'] === 'boolean') {
        if (typeof value !== 'boolean') {
            return `${field} ${ErrorMessage.INVALID_TYPE_BOOLEAN}`;
        }
    }

    if (decorators['type'] === 'date') {
        if (!(value instanceof Date) || isNaN(value.getTime())) {
            return `${field} ${ErrorMessage.INVALID_TYPE_DATE}`;
        }
    }

    if (decorators['type'] === 'object') {
        if (typeof value !== 'object' || value === null) {
            return `${field} ${ErrorMessage.INVALID_TYPE_OBJ}`;
        }
    }

    if (decorators['type'] === 'enum') {
        const enumType = decorators['enumType'];
        if (enumType && !Object.values(enumType).includes(value)) {
            return `${field} ${ErrorMessage.INVALID_ENUM}`;
        }
    }

    return null;
}

function comparePayload(inputPayload: any, testCasePayload: any) {

    let errors = [];
    let isTestCaseValid = true;

    Object.keys(inputPayload).forEach((key) => {
        if (testCasePayload.hasOwnProperty(key)) {
            if (testCasePayload[key] !== inputPayload[key]) {
                errors.push(`Error: Value mismatch for key "${key}". Expected "${inputPayload[key]}" but got "${testCasePayload[key]}"`);
                isTestCaseValid = false;
            }
        } else {
            errors.push(`Error: Missing key "${key}" in testCasePayload`);
            isTestCaseValid = false;
        }
    });

    return { isTestCaseValid, errors };
}



function validatePayloadType(payload: any, dtoClass: any) {
    let errors = [];
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
            } else if (metadata === 'object' && typeof payload[key] !== 'object' && !Array.isArray(payload[key])) {
                errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_OBJ}`);
            } else if (metadata === 'date') {
                if (!(payload[key] instanceof Date)) {
                    valueDate = new Date(payload[key]);
                }
                if (isNaN(valueDate.getTime())) {
                    errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_DATE}`);
                }
            } else if (metadata === 'enum') {
                const enumType = Reflect.getMetadata('enumType', dtoClass.prototype, key);
                if (enumType && !Object.values(enumType).includes(payload[key])) {
                    errors.push(`"${key}" ${ErrorMessage.INVALID_ENUM}`);
                }
            }
        }

        const minLength = Reflect.getMetadata('minLength', dtoClass.prototype, key);
        if (minLength && payload[key]?.length <= minLength) {
            errors.push(`"${key}" ${ErrorMessage.MIN_LENGTH} ${minLength} characters. But got ${payload[key]?.length}`);
        }

        const maxLength = Reflect.getMetadata('maxLength', dtoClass.prototype, key);
        if (maxLength && payload[key]?.length > maxLength) {
            errors.push(`"${key}" ${ErrorMessage.MAX_LENGTH} ${maxLength} characters. But got ${payload[key]?.length}`);
        }

        const min = Reflect.getMetadata('min', dtoClass.prototype, key);
        if (min && payload[key] < min) {
            errors.push(`"${key}" ${ErrorMessage.MIN} ${min}. But got ${payload[key]}`);
        }

        const max = Reflect.getMetadata('max', dtoClass.prototype, key);
        if (max && payload[key] > max) {
            errors.push(`"${key}" ${ErrorMessage.MAX} ${max}. But got ${payload[key]}`);
        }

        const minArray = Reflect.getMetadata('minArray', dtoClass.prototype, key);
        if (minArray && payload[key]?.length < minArray) {
            errors.push(`"${key}" ${ErrorMessage.MIN_ARRAY} ${minArray}. But got ${payload[key]?.length}`);
        }

        const maxArray = Reflect.getMetadata('maxArray', dtoClass.prototype, key);
        if (maxArray && payload[key]?.length > maxArray) {
            errors.push(`"${key}" ${ErrorMessage.MAX_ARRAY} ${maxArray}. But got ${payload[key]?.length}`);
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
