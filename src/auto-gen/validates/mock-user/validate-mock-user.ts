import 'reflect-metadata';
import { getDecorators } from '../../helps/dto-helper';
import { ErrorMessage } from '../../enums/error-message.enum';

export async function validateMockUser(instance: any, payload: any): Promise<string[]> {
    const errors: string[] = [];
    async function validateObject(obj: any, prototype: any, path: string = ''): Promise<void>  {

        const keys = Object.keys(obj);

        for (const key of keys) {
            const value = obj[key];
            const field = path ? `${path}.${key}` : key;

            const decorators = getDecorators(prototype, key);

            if (decorators.type === 'array' && Array.isArray(value)) {
                const quantityArray = payload?.quantity;
                if (quantityArray !== undefined && value.length !== quantityArray) {
                    errors.push(`${field} must have exactly ${quantityArray} obj`);
                }

                //check ulid 
                if (key === 'data') {
                    const userIds = value.map((item: any) => item.userId);
                    userIds.forEach((userId: string, index: number) => {
                        const regexULID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                        if (typeof userId !== 'string' || userId.length !== 26) {
                            errors.push(`${field} must be a valid ULID with 26 characters`);
                        } else if (regexULID.test(userId)) {
                            errors.push(`${field} must only contain uppercase letters and numbers`);
                        }
                    });
                }
                // đệ quy
                value.forEach((item: any, index: number) => {

                    const itemPrototype = Object.getPrototypeOf(item);
                    validateObject(item, itemPrototype, `${field}[${index}]`);

                });
            }

            //check start with
            if (decorators.startWith && typeof value === 'string') {
                const startWithValue = payload.prefix
                if (!startWithValue || !value.startsWith(startWithValue)) {
                    errors.push(`${field} must end with ${startWithValue}`);
                }
            }

            //check end with
            if (decorators.endWith && typeof value === 'string') {
                const endWithValue = obj[decorators.endWith];
                if (!endWithValue || !value.endsWith(endWithValue)) {
                    errors.push(`${field} must end with ${endWithValue}`);
                }
            }

            //check value enum
            if (decorators.type === 'enum') {
                const enumValues = Object.values(decorators.enumType);
                if (!enumValues.includes(value)) {
                    const filterNumber = enumValues.filter(
                        (val) => typeof val === 'number',
                    );
                    errors.push(`${field} ${ErrorMessage.INVALID_RANGE_NUMBER} ${filterNumber.join(', ')}`,
                    );
                }
            }
        }
    }

    const prototype = Object.getPrototypeOf(instance);
    await validateObject(instance, prototype);
    if(errors.length === 0 ){
        globalThis.globalVar.set('userId', instance.data[0].userId)
    }
    return errors;
}