import { UserRole } from '../enums/user-role.enum'
import { ErrorMessage } from '../enums/error-message.enum';
import { DataResponse, typeMap } from '../helps/structures/responses';
export function validateLogicData(data: DataResponse[], dtoClass): any {

    const errors: string[] = [];
    data.forEach((item) => {
        Object.keys(item).forEach((key) => {

            const minLength = Reflect.getMetadata('minLength', dtoClass.prototype, key);
            const maxLength = Reflect.getMetadata('maxLength', dtoClass.prototype, key);
            const minArray = Reflect.getMetadata('minArray', dtoClass.prototype, key);
            const maxArray = Reflect.getMetadata('maxArray', dtoClass.prototype, key);
            const min = Reflect.getMetadata('min', dtoClass.prototype, key);
            const max = Reflect.getMetadata('max', dtoClass.prototype, key);

            const value = item[key];
            if (!typeMap[key]) {
                errors.push(`"${key}" is not defined`);
                return;
            }
            const expectedType = typeMap[key];
            if (value === null) {
                errors.push(`"${key}" ${ErrorMessage.NULL}`);
            } else if (value === '') {
                errors.push(`"${key}" ${ErrorMessage.EMPTY}`);
            } else if (value === undefined) {
                errors.push(`"${key}" ${ErrorMessage.UNDEFINED}`);
            } else {
                switch (expectedType) {
                    case 'string':
                        if (typeof value !== 'string') {
                            errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_STRING}`);
                        }else if(minLength && value.length < minLength){
                            errors.push(`"${key}" ${ErrorMessage.MIN_LENGTH}`);
                        }else if (maxLength && value.length > maxLength){
                            errors.push(`"${key}" ${ErrorMessage.MAX_LENGTH}`);
                        }
                        break;
                    case 'number':
                        if (typeof value !== 'number') {
                            errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_NUMBER}`);
                        }else if(min && value < min ){
                            errors.push(`"${key}" ${ErrorMessage.MIN}`);
                        }else if (max && value > max){
                            errors.push(`"${key}" ${ErrorMessage.MAX}`);
                        }
                        break;
                    case 'boolean':
                        if (typeof value !== 'boolean') {
                            errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_BOOLEAN}`);
                        }
                        break;
                    case 'object':
                        if (typeof value !== 'object' || Array.isArray(value)) {
                            errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_OBJ}`);
                        }
                        break;
                    case 'Date':
                        if (!(new Date(value) instanceof Date)) {
                            errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_DATE}`);
                        }else if(new Date(value) > new Date()){
                            errors.push(`"${key}" ${ErrorMessage.INVALID_DATE_OVER_CURRENT}`);
                        }
                        break;
                    case 'array':
                        if (!Array.isArray(value)) {
                            errors.push(`"${key}" ${ErrorMessage.INVALID_TYPE_ARRAY}`);
                        }else if(minArray && value.length < minArray){
                            errors.push(`"${key}" ${ErrorMessage.MIN_ARRAY}`);
                        }else if (maxArray && value.length > maxArray){
                            errors.push(`"${key}" ${ErrorMessage.MAX_ARRAY}`);
                        }
                        break;
                    case UserRole:
                        if (!Object.values(UserRole).includes(value)) {
                            errors.push(`"${key}" ${ErrorMessage.INVALID_ENUM}`);
                        }
                        break;
                }
            }
        });
    });
    if (errors.length > 0) {
        return { valid: false, errors: errors };
    } else {
        return { valid: true, errors: [] };
    }
}
