import { ErrorMessage } from '../../dtos/enums/error-message.enum'

export function validate(dtoClass: any, payload: any): any {
    const errors: string[] = [];
    const dtoInstance = new dtoClass();

    Object.keys(payload).forEach((key) => {
        const isOptional = Reflect.getMetadata('optional', dtoClass.prototype, key);
        const defaultValue = dtoInstance[key];

        if (isOptional && payload[key] === undefined) {
            payload[key] = defaultValue;
        }

        if (payload[key] === '') {
            errors.push(`"${key}" ${ErrorMessage.empty}`);
        } else if (payload[key] === undefined) {
            errors.push(`"${key}" ${ErrorMessage.undefined}`);
        } else if (payload[key] === null) {
            errors.push(`"${key}" ${ErrorMessage.null}`);
        }

        const type = Reflect.getMetadata('type', dtoClass.prototype, key);
        const minLength = Reflect.getMetadata('minLength', dtoClass.prototype, key);
        const maxLength = Reflect.getMetadata('maxLength', dtoClass.prototype, key);
        const min = Reflect.getMetadata('min', dtoClass.prototype, key);
        const max = Reflect.getMetadata('max', dtoClass.prototype, key);
        const minArray = Reflect.getMetadata('minArray', dtoClass.prototype, key);
        const maxArray = Reflect.getMetadata('maxArray', dtoClass.prototype, key);
        const enumType = Reflect.getMetadata('enumType', dtoClass.prototype, key);

        if (type) {

            if (type === 'string' && typeof payload[key] !== 'string') {
                errors.push(`"${key}" ${ErrorMessage.invalidTypeString}`);
            } else if (type === 'number' && typeof payload[key] !== 'number') {
                errors.push(`"${key}" ${ErrorMessage.invalidTypeNum}`);
            } else if (type === 'boolean' && typeof payload[key] !== 'boolean') {
                errors.push(`"${key}" ${ErrorMessage.invalidTypeBoolean}`);
            } else if (type === 'array' && !Array.isArray(payload[key])) {
                errors.push(`"${key}" ${ErrorMessage.invalidTypeArray}`);
            } else if (type === 'object' && (typeof payload[key] !== 'object' || Array.isArray(payload[key]))) {
                errors.push(`"${key}" ${ErrorMessage.invalidTypeObj}`);
            } else if (type === 'date') {
                const valueDate = new Date(payload[key]);
                if (isNaN(valueDate.getTime())) {
                    errors.push(`"${key}" ${ErrorMessage.invalidTypeDate}`);
                }
            } else if (type === 'enum' && enumType && !Object.values(enumType).includes(payload[key])) {
                errors.push(`"${key}" ${ErrorMessage.invalidEnum}`);
            }
        }

        if (minLength !== undefined && payload[key]?.length < minLength) {
            errors.push(`"${key}" ${ErrorMessage.minLength} ${minLength} characters. But got ${payload[key]?.length}`);
        }
        if (maxLength !== undefined && payload[key]?.length > maxLength) {
            errors.push(`"${key}" ${ErrorMessage.maxLength} ${maxLength} characters. But got ${payload[key]?.length}`);
        }
        if (min !== undefined && payload[key] < min) {
            errors.push(`"${key}" ${ErrorMessage.min} ${min}. But got ${payload[key]}`);
        }
        if (max !== undefined && payload[key] > max) {
            errors.push(`"${key}" ${ErrorMessage.max} ${max}. But got ${payload[key]}`);
        }
        if (minArray !== undefined && payload[key]?.length < minArray) {
            errors.push(`"${key}" ${ErrorMessage.minArray} ${minArray}. But got ${payload[key]?.length}`);
        }
        if (maxArray !== undefined && payload[key]?.length > maxArray) {
            errors.push(`"${key}" ${ErrorMessage.maxArray} ${maxArray}. But got ${payload[key]?.length}`);
        }


        //check others
    });

    if (errors.length > 0) {

        return { valid: false, errors: errors };
    } else {

        return { valid: true, errors: [] };
    }
}