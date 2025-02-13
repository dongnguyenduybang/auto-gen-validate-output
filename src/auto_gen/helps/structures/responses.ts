import { UserRole } from "../../enums/user-role.enum";

export function transformDataResponse(dtoInstance: any): DataResponse {
    const instance = Array.isArray(dtoInstance) ? dtoInstance[0] : dtoInstance;
    return {
        username: instance.username,
        birthday: instance.birthday,
        age: instance.age,
        isActive: instance.isActive,
        isObject: instance.isObject,
        tags: instance.tags,
        role: instance.role,
    };
}

export function successResponse(data: DataResponse[]): SuccessResponse {
    return {
        ok: true,
        data: data,
    };
}

export function failResponse(code: number, message: string, details: string[]): FailResponse {
    return {
        ok: false,
        data: null,
        error: {
            code,
            message,
            details,
        },
    };
}

export interface DataResponse {
    username: string;
    birthday: Date;
    age: number;
    isActive: boolean;
    isObject: object;
    tags: string[];
    role: UserRole;
}


export const typeMap: { [key: string]: any } = {
    username: 'string',
    birthday: 'Date',
    age: 'number',
    isActive: 'boolean',
    isObject: 'object',
    tags: 'array',
    role: UserRole,
};

export interface SuccessResponse {
    ok: true;
    data: DataResponse[];
}

export interface FailResponse {
    ok: false;
    data: null;
    error: { [key: string]: any };
}

export function requestAPI(method: string, path: string, headers: any, payload: any) {
    return {
        method: method,
        url: path,
        headers: headers,
        data: payload,
    };
}