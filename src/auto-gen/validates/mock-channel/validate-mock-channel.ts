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

            // check kiểu dữ liệu array
            if (decorators.type === 'array' && Array.isArray(value)) {
                if (key === 'data') {
                    const quantityArray = payload?.quantity;
                    if (quantityArray !== undefined && value.length !== quantityArray) {
                        errors.push(`${field} must have exactly ${quantityArray} obj`);
                    }
                }

                // Đệ quy cho mảng
                value.forEach((item: any, index: number) => {
                    if (item === undefined) {
                        errors.push(`${field}[${index}] is undefined`);
                        return;
                    }
                    const itemPrototype = Object.getPrototypeOf(item);
                    validateObject(item, itemPrototype, `${field}[${index}]`);
                });
            }

            // check validIf
            if (decorators.validIf) {
                const { condition, value: expectedValue } = decorators.validIf;
                const payloadValue = payload[condition];
                if (payloadValue === expectedValue) {
                    if (decorators.startWith && typeof value === 'string') {
                        const startWithValue = payload.prefix;
                        if (!startWithValue || !value.startsWith(startWithValue)) {
                            errors.push(`${field} must start with ${startWithValue}`);
                        }
                    }
                }
            }

            // check startWith
            if (decorators.startWith && typeof value === 'string') {
                const startWithValue = payload.prefix;
                if (!startWithValue || !value.startsWith(startWithValue)) {
                    errors.push(`${field} must start with ${startWithValue}`);
                }
            }

            // check endWith
            if (decorators.endWith && typeof value === 'string') {
                const endWithValue = obj[decorators.endWith];
                if (!endWithValue || !value.endsWith(endWithValue)) {
                    errors.push(`${field} must end with ${endWithValue}`);
                }
            }
           
        }
    }

    if (errors.length === 0) {
       
        if (Array.isArray(instance.data) && instance.data.length > 0) {
            const firstItem = instance.data[0]; 
            if (firstItem && firstItem.name) {
                globalThis.globalVar.set('prefix', firstItem.name);
            } else {
                console.error('name is undefined in the first item of data');
            }
        } else {
            console.error('data is empty or not an array');
        }
    }
    const prototype = Object.getPrototypeOf(instance);
    validateObject(instance, prototype);

    return errors;
}