import { getDecorators } from "../../helps/dto-helper";
import { ErrorMessage } from "../../enums/error-message.enum";
import { resolveVariables } from "../../helps/get-resolve-variables";

export function validateQuoteMessage(instance: any, payload: any): string[] {
    const errors: string[] = [];

    function validateObject(obj: any, prototype: any, path: string = ''): void {

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
                // check field reactions
                if (key === 'message') {
                    const messageId = valueResponse.messageId;
                    const originalMessage = valueResponse.originalMessage;
                    const originalMessageId = originalMessage?.messageId;
                    if (messageId && originalMessageId) {
                        if (messageId === originalMessageId && (typeof messageId === 'string' || typeof originalMessageId === 'string')) {
                            errors.push(`${field} must be different with data.message.originalMessage.messageId`);
                        }

                    } else {
                        errors.push(`messageId or originalMessageId is missing`);
                    }

                    const updateTimeOriginal = originalMessage.updateTime
                    const createTimeOriginal = originalMessage.createTime

                    if(updateTimeOriginal !== createTimeOriginal){
                        errors.push(`${field}.originalMessage.createTime must be equal with ${field}.originalMessage.updateTime`);
                    }

                }

                // check object other
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

                // check startWith
                if (decorators?.startWith && typeof valueResponse === 'string') {
                    const startWithValue = payload.prefix;
                    if (!startWithValue || !valueResponse.startsWith(startWithValue)) {
                        errors.push(`${field} ${ErrorMessage.START_WITH} ${startWithValue}`);
                    }
                }

                // check endWith
                if (decorators?.endWith && typeof valueResponse === 'string') {
                    const endWithValue = obj[decorators.endWith];
                    if (!endWithValue || !valueResponse.endsWith(endWithValue)) {
                        errors.push(`${field} ${ErrorMessage.END_WITH} ${endWithValue}`);
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

                // check validIf
                if (decorators?.validIf) {
                    const { condition, condition2, condition3 } = decorators.validIf;

                    if (condition === 'channelId') {
                        const channelIdResponse = valueResponse;
                        const channelIdPayload = payload?.channelId;
                        if (channelIdPayload !== channelIdResponse) {
                            errors.push(`${field} must equal ${condition2} payload with value ${channelIdPayload}`);
                        }
                    }

                    if (condition === 'workspaceId') {
                        const workspaceIdResponse = valueResponse;
                        const workspaceIdPayload = payload?.workspaceId;
                        if (workspaceIdPayload !== workspaceIdResponse) {
                            errors.push(`${field} must equal ${condition2} payload with value ${workspaceIdPayload}`);
                        }
                    }

                    if (condition === 'createTime') {
                        const updateTime = obj[condition2];
                        const createTime = valueResponse;
                        if (createTime > updateTime) {
                            errors.push(`${field} must less than with ${condition2}`);
                        }
                    }

                    if (condition === 'editTime' && valueResponse !== undefined) {
                        const editTime = valueResponse;
                        const updateTime = obj[condition2];
                        const timeNow = condition3;

                        if (editTime === updateTime) {
                            errors.push(`${field} must different with ${condition2}`);
                        } else if (editTime < timeNow) {
                            errors.push(`${field} must less be than with ${timeNow}`);
                        }
                    }

                    if (condition === 'updateTime') {
                        const updateTime = valueResponse;
                        const timeNow = condition2;
                       
                        if (updateTime === timeNow) {
                            errors.push(`${field} with ${updateTime} ${ErrorMessage.INVALID_DATE_EQUAL_CURRENT}`);
                        }
                    }

                    //check content 
                    if(condition === 'content'){
                        const contentPayload = payload?.content
                        if(valueResponse !== contentPayload){
                            errors.push(`${field} must be equal with payload ${contentPayload}`)
                        }
      
                    }

                    if(condition === 'contentOriginal'){
                        const contentBefore = resolveVariables(condition2)
                        if(valueResponse !== contentBefore){
                            errors.push(`${field} must be equal with payload ${contentBefore}`)
                        }
                    }

                    if(condition === 'ref' && valueResponse !== undefined){
                        const refBefore = resolveVariables(condition2)
                        const refPayload = payload?.ref

                        if(valueResponse !== refPayload && refPayload !== undefined){
                            errors.push(`${field} must be equal with payload ${refPayload}`)
                        }
                        if(valueResponse === refBefore){
                            errors.push(`${field} must be different with old "ref"`)
                        }
      
                    }

                }

                //check min
                if(decorators?.min){
                    const minDecorator = decorators?.min
                    if(valueResponse < minDecorator){
                        errors.push(`${field} ${ErrorMessage.MIN} ${minDecorator}`)
                    }
                }

            }
        }
    }

    const prototype = Object.getPrototypeOf(instance);
    validateObject(instance, prototype);

    return errors;
}