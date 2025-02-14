import { UserRole } from "../../enums/user-role.enum";
import 'reflect-metadata';

export function transformDataResponse(dtoInstance: any): any {
    const instance = Array.isArray(dtoInstance) ? dtoInstance[0] : dtoInstance;
    const transformedData: { [key: string]: any } = {};
  
    for (const key of Object.keys(instance)) {
      transformedData[key] = instance[key];
    }
  
    return transformedData;
  }

export function successResponse(data: DataResponse[]): SuccessResponse {
    return {
        ok: true,
        data: data,
    };
}

export function failResponse(details: string[]): FailResponse {
    return {
        ok: false,
        data: null,
        error: {
            code: 1000,
            message: "Invalid argument",
            details,
        },
    };
}

export interface DataResponse {
  
 prefix: string,
 quantity: number,
 badge: number

}

export function generateTypeMap(dtoClass: any): { [key: string]: any } {
  const typeMap: { [key: string]: any } = {};
  const metadataKeys = Reflect.getMetadataKeys(dtoClass);
  for (const key of metadataKeys) {
    const type = Reflect.getMetadata('type', dtoClass, key);
    if (type) {
      typeMap[key] = type;
    }
  }

  return typeMap;
}



export interface SuccessResponse {
    ok: true;
    data: DataResponse[];
}

export interface FailResponse {
    ok: false;
    data: null;
    error: { [key: string]: any };
}

export interface ValidationRule {
  field: string; 
  type: "string" | "number" | "boolean" | "array" | "object" | "date" ;
  required: boolean; 
  minLength: number; 
  maxLength: number; 
  startsWith: string; 
  includes: string;
  min: number;
  max: number;
  minArray: number;
  maxArray: number;
  minDate: Date;
  maxDate: Date;
  optional: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[] | null;
}