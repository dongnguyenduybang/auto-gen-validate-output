import 'reflect-metadata';
import { getDecorators } from '../../helps/dto-helper';

export function validateMockChannel(instance: any, payload: any): string[] {
    const errors: string[] = [];

    function validateObject(obj: any, prototype: any, path: string = ''): void {

        const keys = Object.keys(obj);

        for (const key of keys) {
            const value = obj[key];
            const field = path ? `${path}.${key}` : key;

            const decorators = getDecorators(prototype, key);
            if (decorators.type === 'array' && Array.isArray(value)) {

                if (key === 'data') {
                    const quantityArray = payload?.quantity;
                    if (quantityArray !== undefined && value.length !== quantityArray) {
                        errors.push(`${field} must have exactly ${quantityArray} obj`);
                    }
                }

                // đệ quy
                value.forEach((item: any, index: number) => {

                    const itemPrototype = Object.getPrototypeOf(item);
                    validateObject(item, itemPrototype, `${field}[${index}]`);

                });
            }


            //check valid if
            if (decorators.validIf) {
                
                const { condition, value: expectedValue } = decorators.validIf; 
                const payloadValue = payload[condition];
                if (payloadValue === expectedValue) {

                    if (decorators.startWith && typeof value === 'string') {

                        const startWithValue = payload.prefix
                        if (!startWithValue || !value.startsWith(startWithValue)) {

                            errors.push(`${field} must start with ${startWithValue}`);
                        }
                    }
                }
            }

            //check start with
            if (decorators.startWith && typeof value === 'string') {
                const startWithValue = payload.prefix
                if (!startWithValue || !value.startsWith(startWithValue)) {
                    errors.push(`${field} must start with ${startWithValue}`);
                }
            }

            //check end with
            if (decorators.endWith && typeof value === 'string') {
                const endWithValue = obj[decorators.endWith];
                if (!endWithValue || !value.endsWith(endWithValue)) {
                    errors.push(`${field} must end with ${endWithValue}`);
                }
            }

        }
    }

    const prototype = Object.getPrototypeOf(instance);
    validateObject(instance, prototype);

    return errors;
}