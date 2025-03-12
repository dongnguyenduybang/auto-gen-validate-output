import { getDecorators } from "../../helps/dto-helper";
import { ErrorMessage } from "../../enums/error-message.enum";
import { plainToClass } from "class-transformer";
import { MediaAttachments } from "../../dto-response/send-message-sticker.response";
import { executeBeforeAllSteps } from "../../functions";
import { resolveVariables } from "../../helps/get-resolve-variables";
import { resolveDeep } from "../../helps/utils";

export function validateMarkAllChannelAsRead(instance: any, payload: any): string[] {
    const errors: string[] = [];

    async function validateObject(obj: any, prototype: any, path: string = ''): Promise<void> {

        const keys = Object.keys(obj);

        for (const key of keys) {
            const valueResponse = obj[key];
            const field = path ? `${path}.${key}` : key;

            const decorators = getDecorators(prototype, key);

            // check isDefined
            if (decorators?.isDefined && (valueResponse === undefined || valueResponse === null)) {
                errors.push(`${field} is required but got ${valueResponse}`);
                continue;
            }

            // check array
            if (decorators?.type === 'array' && Array.isArray(valueResponse)) {
                valueResponse.forEach((item: any, index: number) => {
                    const itemPrototype = Object.getPrototypeOf(item);
                    validateObject(item, itemPrototype, `${field}[${index}]`);
                });
            }

            //check obj
            else if (decorators?.type === 'object' && typeof valueResponse === 'object' && valueResponse !== null) {
                const nestedPrototype = Object.getPrototypeOf(valueResponse);
                validateObject(valueResponse, nestedPrototype, field);
            }

            // check other
            else {
                if (decorators?.type === 'string' && typeof valueResponse !== 'string' && valueResponse !== undefined) {
                    errors.push(`${field} ${ErrorMessage.INVALID_TYPE_STRING}`);
                }
                if (decorators?.type === 'number' && typeof valueResponse !== 'number' && valueResponse !== undefined) {
                    errors.push(`${field}  ${ErrorMessage.INVALID_TYPE_NUMBER}`);
                }
                if (decorators?.type === 'boolean' && typeof valueResponse !== 'boolean' && valueResponse !== undefined) {
                    errors.push(`${field}  ${ErrorMessage.INVALID_TYPE_BOOLEAN}`);
                }

            

            }

        }
    }

    const prototype = Object.getPrototypeOf(instance);
    validateObject(instance, prototype);

    return errors;
}