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
                const { condition, condition2 } = decorators.validIf;
                const payloadValue = payload[condition];
                if (payloadValue === condition2) {
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
    const prototype = Object.getPrototypeOf(instance);
    validateObject(instance, prototype);
    if(errors.length === 0 ){
        globalThis.globalVar.set('channelId', instance.data[0].channelId)
    }
    return errors;
}