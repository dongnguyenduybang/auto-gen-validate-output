import 'reflect-metadata';
import { getDecorators } from '../../helps/dto-helper';
import { ErrorMessage } from '../../enums/error-message.enum';
import { plainToClass } from 'class-transformer';
import { Reaction } from '../../response/revoke-message-reaction.response';

export function validateRevokeMessageReaction(instance: any, payload: any): string[] {
    const errors: string[] = [];

    function validateObject(obj: any, prototype: any, path: string = ''): void {
        const keys = Object.keys(obj);
        for (const key of keys) {
            const valueResponse = obj[key];
            const field = path ? `${path}.${key}` : key
            const decorators = getDecorators(prototype, key);

            // check IsDefined
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

            // check object
            else if (decorators?.type === 'object' && typeof valueResponse === 'object' && valueResponse !== null) {

                if (key === 'reactions') {
                    const emojiPayload = payload.emoji;

                    Object.entries(valueResponse || {}).forEach(([reactionKey, reactionValue]) => {

                        if (!/^\p{Emoji}$/u.test(reactionKey)) {
                            return;
                        }
                        if (reactionKey.includes(emojiPayload)) {
                            errors.push(`Emoji '${emojiPayload}' still unable to revoke ${field}`);
                            return;
                        }
                        const reactionInstance = plainToClass(Reaction, reactionValue);
                        const nestedPrototype = Object.getPrototypeOf(reactionInstance);
                        validateObject(reactionInstance, nestedPrototype, `${field}.${reactionKey}`);
                    });
                } else {

                    const nestedPrototype = Object.getPrototypeOf(valueResponse);
                    validateObject(valueResponse, nestedPrototype, field);
                }
            }

            // check type
            else {
                if (decorators?.type === 'string' && typeof valueResponse !== 'string') {
                    errors.push(`${field} must be a string but got ${typeof valueResponse}`);
                }
                if (decorators?.type === 'number' && typeof valueResponse !== 'number') {
                    errors.push(`${field} must be a number but got ${typeof valueResponse}`);
                }
                if (decorators?.type === 'boolean' && typeof valueResponse !== 'boolean') {
                    errors.push(`${field} must be a boolean but got ${typeof valueResponse}`);
                }

                // check startWith
                if (decorators?.startWith && typeof valueResponse === 'string') {
                    const startWithValue = payload.prefix;
                    if (!startWithValue || !valueResponse.startsWith(startWithValue)) {
                        errors.push(`${field} must start with ${startWithValue}`);
                    }
                }

                // check endWith
                if (decorators?.endWith && typeof valueResponse === 'string') {
                    const endWithValue = obj[decorators.endWith];
                    if (!endWithValue || !valueResponse.endsWith(endWithValue)) {
                        errors.push(`${field} must end with ${endWithValue}`);
                    }
                }

                // check enum
                if (decorators?.type === 'enum') {
                    const enumValues = Object.values(decorators.enumType);
                    if (!enumValues.includes(valueResponse)) {
                        const filterNumber = enumValues.filter((val) => typeof val === 'number');
                        errors.push(
                            `${field} ${ErrorMessage.INVALID_RANGE_NUMBER} ${filterNumber.join(', ')}`,
                        );
                    }
                }

                if (path === 'data.message') {
                    // check validIf
                    if (decorators?.validIf) {
                        const { condition, condition2 } = decorators.validIf;

                        if (condition === 'channelId') {
                            const channelIdResponse = valueResponse;
                            const channelIdPayload = payload?.condition2;
                            if (channelIdPayload !== channelIdResponse) {
                                errors.push(`${field} must equal ${condition2} payload with value ${channelIdPayload}`);
                            }
                        }

                        if (condition === 'workspaceId') {
                            const workspaceIdResponse = valueResponse;
                            const workspaceIdPayload = payload?.condition2;
                            if (workspaceIdPayload !== workspaceIdResponse) {
                                errors.push(`${field} must equal ${condition2} payload with value ${workspaceIdPayload}`);
                            }
                        }

                        if (condition === 'messageId') {
                            const messageIdResponse = valueResponse;
                            const messageIdPayload = payload?.condition2;
                            if (messageIdPayload !== messageIdResponse) {
                                errors.push(`${field} must equal ${condition2} payload with value ${messageIdPayload}`);
                            }
                        }

                        if (condition === 'updateTime') {
                            const updateTime = valueResponse;
                            const timeNow = condition2;
                            if (updateTime > timeNow) {
                                errors.push(`${field} with ${updateTime} must be less to timeNow ${timeNow}`);
                            }
                        }
                    }

                    if(key === 'reactions'){
                        errors.push(`Field 'reactions' must be undefined`);
                    }
                }
            }
        }
    }

    const prototype = Object.getPrototypeOf(instance);
    validateObject(instance, prototype);

    return errors;
}