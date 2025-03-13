import { getDecorators } from "../../helps/dto-helper";
import { ErrorMessage } from "../../enums/error-message.enum";
import { plainToClass } from "class-transformer";
import { MediaAttachments } from "../../response/send-sticker-message.response";
import { executeBeforeAllSteps } from "../../functions";


export function validateReportMessage(instance: any, payload: any): string[] {
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
                // check field sticker
                if (key === 'sticker') {
                    const stickerInstance = plainToClass(MediaAttachments, valueResponse);
                    const nestedPrototype = Object.getPrototypeOf(stickerInstance);
                    validateObject(stickerInstance, nestedPrototype, field);
                } else {
                    const nestedPrototype = Object.getPrototypeOf(valueResponse);
                    validateObject(valueResponse, nestedPrototype, field);
                }
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
                        const channelIdPayload = payload?.[condition2];
                        if (channelIdPayload !== channelIdResponse) {
                            errors.push(`${field} must equal ${condition2} payload with value ${channelIdPayload}`);
                        }
                    }

                    if (condition === 'workspaceId') {
                        const workspaceIdResponse = valueResponse;
                        const workspaceIdPayload = payload?.[condition2];
                        if (workspaceIdPayload !== workspaceIdResponse) {
                            errors.push(`${field} must equal ${condition2} payload with value ${workspaceIdPayload}`);
                        }
                    }

                    if (condition === 'createTime') {
                        const updateTime = obj[condition2];
                        const createTime = valueResponse;
                        if (createTime > updateTime) {
                            errors.push(`${field} must greater than with ${condition2}`);
                        }
                    }

                    if (condition === 'editTime' && valueResponse !== undefined) {
                        const editTime = valueResponse;
                        const updateTime = obj[condition2];
                        const timeNow = condition3;

                        if (editTime !== updateTime) {
                            errors.push(`${field} must different with ${updateTime}`);
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

                    if(condition === 'stickerId'){
                        const stickerIdResponse = valueResponse;
                        const stickerIdPayload = payload?.[condition2]
                        if(stickerIdResponse !== stickerIdPayload){
                            errors.push(`${field} must equal ${condition2} payload with value ${stickerIdPayload}`);
                        }

                        const getSticker = await executeBeforeAllSteps([`checkSticker('${stickerIdResponse}')`])
                        const sticker = getSticker[0].data
                        if(stickerIdResponse !== sticker.stickerId){
                            errors.push(`${field} is undefined sticker with stickerId ${stickerIdResponse}`);
                        }
                        
                    }

                    if(condition === 'collectionId'){
                        const collectionId = valueResponse
                        const getStickerCollection = await executeBeforeAllSteps([`checkCollection('${collectionId}')`])
                        const collectionSticker = getStickerCollection[0].data
                       if(collectionId !== collectionSticker ){
                        errors.push(`${field} is undefined collection with collectionId ${collectionId}`);
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

                if(valueResponse !== true){
                    errors.push(`${field} must be equal with value true`);
                }

            }

        }
    }

    const prototype = Object.getPrototypeOf(instance);
    validateObject(instance, prototype);
    return errors;
}