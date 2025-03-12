import 'reflect-metadata';
import { getDecorators } from '../../helps/dto-helper';
import { ErrorMessage } from '../../enums/error-message.enum';

export function validateSendMessage(instance: any, payload: any): string[] {
    const errors: string[] = [];
    let isUser: string


    // đệ quy lặp vào từng mảng và obj
    function validateObject(obj: any, prototype: any, path: string = ''): void {
        const keys = Object.keys(obj);

        for (const key of keys) {
            const valueResponse = obj[key];
            const field = path ? `${path}.${key}` : key;

            const decorators = getDecorators(prototype, key);

            // check IsDefined
            if (decorators.isDefined && (valueResponse === undefined || valueResponse === null)) {
                errors.push(`${field} is required`);
                continue;
            }

            // mảng
            if (decorators.type === 'array' && Array.isArray(valueResponse)) {
                valueResponse.forEach((item: any, index: number) => {
                    const itemPrototype = Object.getPrototypeOf(item);
                    validateObject(item, itemPrototype, `${field}[${index}]`);
                });
            }

            // obj
            else if (decorators.type === 'object' && typeof valueResponse === 'object' && valueResponse !== null) {
                const nestedPrototype = Object.getPrototypeOf(valueResponse);
                validateObject(valueResponse, nestedPrototype, field);
            }

            // check type
            else {
                if (decorators.type === 'string' && typeof valueResponse !== 'string') {
                    errors.push(`${field} must be a string but got ${typeof valueResponse}`);
                }
                if (decorators.type === 'number' && typeof valueResponse !== 'number') {
                    errors.push(`${field} must be a number but got ${typeof valueResponse}`);
                }
                if (decorators.type === 'boolean' && typeof valueResponse !== 'boolean') {
                    errors.push(`${field} must be a boolean but got ${typeof valueResponse}`);
                }

                // check startWith
                if (decorators.startWith && typeof valueResponse === 'string') {
                    const startWithValue = payload.prefix;
                    if (!startWithValue || !valueResponse.startsWith(startWithValue)) {
                        errors.push(`${field} must start with ${startWithValue}`);
                    }
                }

                //check endWith
                if (decorators.endWith && typeof valueResponse === 'string') {
                    const endWithValue = obj[decorators.endWith];
                    if (!endWithValue || !valueResponse.endsWith(endWithValue)) {
                        errors.push(`${field} must end with ${endWithValue}`);
                    }
                }

                // check enum
                if (decorators.type === 'enum') {
                    const enumValues = Object.values(decorators.enumType);
                    if (!enumValues.includes(valueResponse)) {
                        const filterNumber = enumValues.filter((val) => typeof val === 'number');
                        errors.push(
                            `${field} ${ErrorMessage.INVALID_RANGE_NUMBER} ${filterNumber.join(', ')}`,
                        );
                    }
                }
                //get userType
                if(path === 'includes.users[0]'){
                    if(key === 'userType'){
                        isUser = valueResponse
                    }
                }
                //check path data.message
                if (path === 'data.message') {
                    // check validIf
                    if (decorators.validIf) {

                        const { condition, condition2 } = decorators.validIf;
                        //check channelId = payload.channelId
                        if (condition === 'channelId') {
                            const channelIdResponse = valueResponse;
                            const channelIdPayload = payload?.channelId;
                            if (channelIdPayload !== channelIdResponse) {
                                errors.push(`${field} must equal ${condition2} payload with value ${channelIdPayload}`);
                            }
                        }
                        //check workspaceId = payload.workspaceId
                        if (condition === 'workspaceId') {
                            const workspaceIdResponse = valueResponse;
                            const workspaceIdPayload = payload?.workspaceId;
                            if (workspaceIdPayload !== workspaceIdResponse) {
                                errors.push(`${field} must equal ${condition2} payload with value ${workspaceIdPayload}`);
                            }
                        }
                        //check createTime != updateTime
                        if (condition === 'createTime') {
                            const updateTime = obj[condition2];
                            const createTime = valueResponse;

                            if (createTime !== updateTime) {
                                errors.push(`${field} must equal with ${obj[condition2]}`);
                            }
                        }
                        //check content = payload.content
                        if (condition === 'content' && decorators.optional !== true) {
                            const contentResponse = valueResponse;
                            const contentPayload = payload?.content;
                            if (contentPayload !== contentResponse) {
                                errors.push(`${field} must equal ${condition2} payload with value ${contentPayload}`);
                            }
                        }

                        if (condition === 'ref' && decorators.optional !== true) {
                            const refResponse = valueResponse;
                            const refPayload = payload?.ref;
                            if (refPayload !== refResponse) {
                                errors.push(`${field} must equal ${condition2} payload with value ${refPayload}`);
                            }
                        }
                        //check updateTime > time now 
                        if (condition === 'updateTime') {
                            const updateTime = valueResponse;
                            const timeNow = condition2;
                            if (updateTime > timeNow) {
                                errors.push(`${field} with ${updateTime} must be less or equal timeNow ${timeNow}`);
                            }
                        }
                        //check messageStatus = 1
                        if (condition === 'messageStatus') {
                            if (String(valueResponse).trim() !== String(condition2).trim()) {
                                errors.push(`${field} must be equal ${condition2}`);
                            }
                        }

                        if(key !== 'mediaAttachments'){
                             //check attachmentType = 0 nếu field mediaAttachments = undefined
                            if(condition === 'attachmentType'){
                                if(String(valueResponse).trim() !== String(condition2).trim()){
                                    errors.push(`${field} must be equal ${condition2}`);
                                   }
                                    //check attachmentCount = 0 nếu field mediaAttachments = undefined
                            }else if( condition === 'attachmentCount'){
                                if(String(valueResponse).trim() !== String(condition2).trim()){
                                    errors.push(`${field} must be equal ${condition2}`);
                                   }
                            }
                        }
                        
                        if(key !== 'reports'){
                             //check isReported = 0 nếu field reports = undefined
                            if(condition === 'isReported'){
                                if(String(valueResponse).trim() !== String(condition2).trim()){
                                    errors.push(`${field} must be equal ${condition2}`);
                                }
                                 //check reportCount = 0 nếu field reports = undefined
                            }else if(condition === 'reportCount') {
                                if(String(valueResponse).trim() !== String(condition2).trim()){
                                    errors.push(`${field} must be equal ${condition2}`);
                                }
                            }
                        }
                       
                       
                    }    

                    //check messageType là user send. nếu userType = 0 thì messageType = 0 
                    if(key === 'messageType'){
                        if(Number(isUser) === 0 && valueResponse !== 0 ){
                            errors.push(`${field} must be equal 0`);
                        }
                    }

                    
                    
                }
            }


        }
    }

    const prototype = Object.getPrototypeOf(instance);
    validateObject(instance, prototype);

    return errors;
}