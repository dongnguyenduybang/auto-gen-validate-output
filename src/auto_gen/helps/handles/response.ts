
import { SuccessResponse, UserDataResponse, FailResponse } from "../structures/responses";

const crypto = require('crypto');

export function transformToUserDataResponse(dtoInstance: any): UserDataResponse {
  const instance = Array.isArray(dtoInstance) ? dtoInstance[0] : dtoInstance;
    return {
        // userId: crypto.randomBytes(13).toString('hex'),
        // token: crypto.randomBytes(20).toString('hex'),
        username: instance.username,
        birthday: instance.birthday,
        age: instance.age,
        isActive: instance.isActive,
        isObject: instance.isObject,
        tags: instance.tags,
        role: instance.role,
    };
}

export function createSuccessResponse(data: UserDataResponse[]): SuccessResponse {
  return {
      ok: true,
      data: data,
  };
}

export function createFailResponse(code: number, message: string, details: string[]): FailResponse {
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

export function handleResponse(data: { ok: boolean; data: any; errors?: { [key: string]: any } }) {

  if (data.ok) {

      const userData = transformToUserDataResponse(data.data);
      return createSuccessResponse([userData]);
  } else {

      const errorDetails = Object.values(data.errors || {}).flat(); 
      return createFailResponse(1000, "Invalid argument", errorDetails); 
  }
}