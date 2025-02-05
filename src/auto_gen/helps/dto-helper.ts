import 'reflect-metadata';
import { ErrorMessage } from '../dtos/enums/error-message.enum';

export function getDecorators(target: any, propertyKey: string): Record<string, any> {
    const decorators: Record<string, any> = {};

    const metadataKeys = Reflect.getMetadataKeys(target, propertyKey);

    metadataKeys.forEach((key) => {
        const value = Reflect.getMetadata(key, target, propertyKey);
        decorators[key] = value;
    });

    if (Reflect.hasMetadata('isAny', target, propertyKey)) {
        decorators['isAny'] = Reflect.getMetadata('isAny', target, propertyKey);
    }

    return decorators;
}

export function generateErrorVariantsForField(fieldValue: any, decorators: Record<string, any>): any[] {
    const errorVariants: any[] = [];

    if (!decorators['optional']) {
        errorVariants.push(undefined);
    }

    if (decorators['isAny']) {
        return errorVariants.concat([null, undefined, 'string', '', 123, new Date(), true, []]);
    }

    if (decorators['min'] && fieldValue < decorators['min']) {
        errorVariants.push(fieldValue - 1);
    }
    if (decorators['max'] && fieldValue > decorators['max']) {
        errorVariants.push(fieldValue + 1);
    }

    if (decorators['notNull']) errorVariants.push(null);
    if (decorators['notEmpty']) errorVariants.push('');


    const typeHandlers: Record<string, () => void> = {
        number: () => {
            errorVariants.push('abcdefg');
            errorVariants.push(fieldValue)
        },
        string: () => {
            errorVariants.push(123456789);
            errorVariants.push(fieldValue)
        },
        array: () => {
            errorVariants.push('string');
            errorVariants.push(fieldValue)
        },
        boolean: () => {
            errorVariants.push('string');
            errorVariants.push(fieldValue)
        },
        date: () => {
            errorVariants.push('random_string');
            errorVariants.push(fieldValue)
        },
        any: () => { },
        object: () => {
            errorVariants.push('string');
            errorVariants.push(fieldValue);
        },
        enum: () => {
            errorVariants.push(fieldValue);
        }
    };

    if (decorators['type']) {
        console.log('decorators.type:', decorators['type']);  
        if (typeHandlers[decorators['type']]) {
            typeHandlers[decorators['type']](); 
        } else {
            console.error(`No handler found for type: ${decorators['type']}`); 
        }
    }
    
    return errorVariants;
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
        return `${field} ${ErrorMessage.undefined}`;
    }

    if (value === null && decorators['notNull']) {
        return `${field} ${ErrorMessage.null}`;
    }

    if (value === '' && decorators['notEmpty']) {
        return `${field} ${ErrorMessage.empty}`;
    }

    if (decorators['isAny']) {
        return null;
    }

    if (decorators['type'] === 'string') {

        if (decorators['minLength'] && typeof value === 'string' && value.length <= decorators['minLength']) {
            return `${field} ${ErrorMessage.minLength} ${decorators['minLength']}`;
        }

        if (decorators['maxLength'] && typeof value === 'string' && value.length > decorators['maxLength']) {

            return `${field} ${ErrorMessage.maxLength} ${decorators['maxLength']}`;
        }

        if (typeof value !== 'string') {
            return `${field} ${ErrorMessage.invalidTypeString}`;
        }
    }

    if (decorators['type'] === 'number') {
        if (typeof value !== 'number') {
            return `${field} ${ErrorMessage.invalidTypeNum}`;
        }
        if (decorators['min'] && value < decorators['min']) {
            return `${field} ${ErrorMessage.min} ${decorators['min']}`;
        }
        if (decorators['max'] && value > decorators['max']) {
            return `${field} ${ErrorMessage.max} ${decorators['max']}`;
        }
    }

    if (decorators['type'] === 'array') {
        if (!Array.isArray(value)) {
            return `${field} ${ErrorMessage.invalidTypeArray}`;
        }
        if (decorators['minArray'] && value.length < decorators['minArray']) {
            return `${field} ${ErrorMessage.minArray} ${decorators['minArray']}`;
        }
        if (decorators['maxArray'] && value.length > decorators['maxArray']) {
            return `${field} ${ErrorMessage.maxArray} ${decorators['maxArray']}`;
        }
    }

    if (decorators['type'] === 'boolean') {
        if (typeof value !== 'boolean') {
            return `${field} ${ErrorMessage.invalidTypeBoolean}`;
        }
    }

    if (decorators['type'] === 'date') {
        if (!(value instanceof Date) || isNaN(value.getTime())) {
            return `${field} ${ErrorMessage.invalidTypeDate}`;
        }
    }

    if (decorators['type'] === 'object') {
        if (typeof value !== 'object' || value === null) {
            return `${field} ${ErrorMessage.invalidTypeObj}`;
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
    let valueDate

    const dtoInstance = new dtoClass()

    Object.keys(payload).forEach((key) => {

        const isOptional = Reflect.getMetadata('optional', dtoClass.prototype, key);
        const defaultValue = dtoInstance[key];

        if (isOptional && payload[key] === undefined) {

            payload[key] = defaultValue;
        } else if (payload[key] === '') {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.empty}`);
        } else if (payload[key] === undefined) {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.undefined}`);
        } else if (payload[key] === null) {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.null}`);
        }

        const metadata = Reflect.getMetadata('type', dtoClass.prototype, key);

        if (metadata) {
            if (metadata === 'string' && typeof payload[key] !== 'string') {

                errors.push(`Error: Value for key "${key}" ${ErrorMessage.invalidTypeString}`);
            } else if (metadata === 'number' && typeof payload[key] !== 'number') {

                errors.push(`Error: Value for key "${key}" ${ErrorMessage.invalidTypeNum}`);
            } else if (metadata === 'boolean' && typeof payload[key] !== 'boolean') {

                errors.push(`Error: Value for key "${key}" ${ErrorMessage.invalidTypeBoolean}`);
            } else if (metadata === 'array' && !Array.isArray(payload[key])) {

                errors.push(`Error: Value for key "${key}" ${ErrorMessage.invalidTypeArray}`);
            } else if (metadata === 'object' && typeof payload[key] !== 'object' && !Array.isArray(payload[key])) {

                errors.push(`Error: Value for key "${key}" ${ErrorMessage.invalidTypeObj}`);
            } else if (metadata === 'date') {

                if (!(payload[key] instanceof Date)) {
                    valueDate = new Date(payload[key]);
                }
                if (isNaN(valueDate.getTime())) {
                    errors.push(`Error: Value for key "${key}" ${ErrorMessage.invalidTypeDate}`);
                }
            }
        }

        const minLength = Reflect.getMetadata('minLength', dtoClass.prototype, key);
        if (minLength && payload[key]?.length <= minLength) {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.minLength} ${minLength} characters. But got ${payload[key]?.length}`);
        }

        const maxLength = Reflect.getMetadata('maxLength', dtoClass.prototype, key);
        if (maxLength && payload[key]?.length > maxLength) {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.maxLength} ${maxLength} characters. But got ${payload[key]?.length}`);
        }

        const min = Reflect.getMetadata('min', dtoClass.prototype, key);
        if (min && payload[key] < min) {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.min} ${min}. But got ${payload[key]}`);
        }

        const max = Reflect.getMetadata('max', dtoClass.prototype, key);
        if (max && payload[key] > max) {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.max} ${max}. Got ${payload[key]}`);
        }

        const minArray = Reflect.getMetadata('minArray', dtoClass.prototype, key);
        if (minArray && payload[key] < minArray) {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.minArray} ${minArray}. But got ${payload[key]}`);
        }

        const maxArray = Reflect.getMetadata('maxArray', dtoClass.prototype, key);
        if (maxArray && payload[key] > maxArray) {

            errors.push(`Error: Value for key "${key}" ${ErrorMessage.maxArray} ${maxArray}. Got ${payload[key]}`);
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
