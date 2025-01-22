import { isDate } from 'class-validator';
import 'reflect-metadata';

export class CreateUserDTO {

    @Max(255)
    @Min(1)
    @IsOptional()
    @IsString()
    username: string = undefined;

    @IsOptional()
    @IsString()
    @Min(1)
    @Max(255)
    address?: string = undefined;

    // @IsOptional()
    // @IsDate()
    // birthday?: Date = undefined;

    // @Min(1)
    // @IsOptional()
    // @IsNumber()
    // age?: number = undefined;

    // @IsOptional()
    // @IsBoolean()
    // isActive: boolean = undefined;

    // @IsOptional()
    // @IsAny()
    // typeAny?: any = undefined;

    // @IsOptional()
    // @IsArray()
    // tags?: string[] = undefined;
}

// Decorator Min
function Min(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('min', value, target, propertyKey);
    };
}

// Decorator Max
function Max(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('max', value, target, propertyKey);
    };
}

// Decorator IsOptional
function IsOptional() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('optional', true, target, propertyKey);
    };
}

// Decorator IsString
function IsString() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'string', target, propertyKey);
    };
}

// Decorator IsNumber
function IsNumber() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'number', target, propertyKey);
    };
}

// Decorator IsBoolean
function IsBoolean() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'boolean', target, propertyKey);
    };
}

// Decorator IsDate
function IsDate() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'date', target, propertyKey);
    };
}

// Decorator IsAny
function IsAny() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'any', target, propertyKey);
    };
}

// Decorator IsArray
function IsArray() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'array', target, propertyKey);
    };
}
