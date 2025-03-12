import { ErrorMessage } from "../../enums/error-message.enum";
import { getDecorators } from "../../helps/dto-helper";

export function validateSendLocation(instance: any, payload: any): string[] {
    const errors: string[] = [];
    let isUser: string;

    function validateObject(obj: any, prototype: any, path: string = ''): void {
        const keys = Object.keys(obj);
        for (const key of keys) {
            const valueResponse = obj[key];
            const field = path ? `${path}.${key}` : key;
            const decorators = getDecorators(prototype, key);
            
            // Check IsDefined
            if (decorators?.isDefined && (valueResponse === undefined || valueResponse === null)) {
                errors.push(`${field} is required but got ${valueResponse}`);
                continue;
            }

            // Check array of objects or simple arrays
            if (decorators?.type === 'object' && typeof valueResponse === 'object' && valueResponse !== null) {

                const nestedPrototype = Object.getPrototypeOf(valueResponse);
                validateObject(valueResponse, nestedPrototype, field);

            } else if (decorators?.type === 'array' && Array.isArray(valueResponse)) {
                // Validate other arrays
                valueResponse.forEach((item: any, index: number) => {
                    validateObject(item, Object.getPrototypeOf(item), `${field}[${index}]`);
                });
                if(key === 'embed'){
                    valueResponse.forEach((embedItem: any, index: number) => {

                        if (!embedItem.locationData) {
                            errors.push(`${field}[${index}].locationData is missing`);
                            return;
                        }

                        const { latitude, longitude } = embedItem.locationData;
                        if (latitude !== payload.latitude) {
                            errors.push(`${field}[${index}].locationData.latitude mismatch`);
                        }
                        if (longitude !== payload.longitude) {
                            errors.push(`${field}[${index}].locationData.longitude mismatch`);
                        }
                    });
                }
            } else {
                // Validate data types
                if (decorators?.type === 'string' && typeof valueResponse !== 'string') {
                    errors.push(`${field} must be a string but got ${typeof valueResponse}`);
                }
                if (decorators?.type === 'number' && typeof valueResponse !== 'number') {
                    errors.push(`${field} must be a number but got ${typeof valueResponse}`);
                }
                if (decorators?.type === 'boolean' && typeof valueResponse !== 'boolean') {
                    errors.push(`${field} must be a boolean but got ${typeof valueResponse}`);
                }

                if (decorators?.type === 'enum') {
                    const enumValues = Object.values(decorators.enumType);
                    if (!enumValues.includes(valueResponse)) {
                        const filterNumber = enumValues.filter((val) => typeof val === 'number');
                        errors.push(
                            `${field} ${ErrorMessage.INVALID_RANGE_NUMBER} ${filterNumber.join(', ')}`,
                        );
                    }
                }

                // Check specific conditions for 'userType' and 'messageType'
                if (path === 'includes.users[0]' && key === 'userType') {
                    isUser = valueResponse;
                }

                if (path === 'data.message') {
                    // Optional fields and conditional validations
                    // if (decorators?.optional === true) {
                    //     return;
                    // }
                    
                    // Check validIf conditions (specific checks)
                    if (decorators?.validIf) {
                        const { condition, condition2 } = decorators.validIf;
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
                            if (createTime !== updateTime) {
                                errors.push(`${field} must equal with ${obj[condition2]}`);
                            }
                        }
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

                        if (condition === 'updateTime') {
                            const updateTime = valueResponse;
                            const timeNow = condition2;
                            if (updateTime > timeNow) {
                                errors.push(`${field} with ${updateTime} must be less or equal to timeNow ${timeNow}`);
                            }
                        }

                        if (condition === 'messageStatus') {
                            if (String(valueResponse).trim() !== String(condition2).trim()) {
                                errors.push(`${field} must be equal ${condition2}`);
                            }
                        }

                        // Validate attachmentType = 10 if embed contains locationData
                        if (condition === 'attachmentType') {
                            if (String(valueResponse).trim() !== String(condition2).trim()) {
                                errors.push(`${field} must be equal ${condition2}`);
                            }
                        }

                        if (condition === 'type') {
                            if (valueResponse !== condition2) {
                                errors.push(`${field} must be equal ${condition2}`);
                            }
                        }
                    }

                    // Check userType and messageType consistency
                    if (key === 'messageType') {
                        if (Number(isUser) === 0 && valueResponse !== 0) {
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
