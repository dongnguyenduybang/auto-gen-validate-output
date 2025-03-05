
import { getDecorators } from '../../helps/dto-helper';
import { getMessage } from '../../functions/get-message';


export async function validateMockMessage(instance: any, payload: any): Promise<string[]> {
    const errors: string[] = [];

    async function validateObject(obj: any, prototype: any, path: string = ''): Promise<void> {
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
            }

            if (key === 'data') {
                const params = { token: '{{token}}', channelId: '{{channelId}}' };
                try {
                    const dataMessage = await getMessage(params.token, params.channelId, value);
                   
                    const messageIdCheck = dataMessage?.data?.data?.message?.messageId;
                    const expectedMessageId = Array.isArray(value) ? value[0] : value;

                    if (messageIdCheck === expectedMessageId) {
                       continue
                    } else {
                        errors.push(`${field} messageId must be equal to ${expectedMessageId}`);
                    }
                } catch (error) {
                    console.error('Error in getMessage:', error);
                    errors.push(`${field} failed to validate`);
                }
            }
        }
    }

    const prototype = Object.getPrototypeOf(instance);
    await validateObject(instance, prototype);
    return errors;
}