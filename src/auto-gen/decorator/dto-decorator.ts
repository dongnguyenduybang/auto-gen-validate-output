import 'reflect-metadata';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function Min(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('min', value, target, propertyKey);
  };
}

export function Max(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('max', value, target, propertyKey);
  };
}

export function MinLength(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('minLength', value, target, propertyKey);
  };
}

export function MaxLength(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('maxLength', value, target, propertyKey);
  };
}

export function MinArray(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('minArray', value, target, propertyKey);
  };
}

export function MaxArray(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('maxArray', value, target, propertyKey);
  };
}

export function IsOptional() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('optional', true, target, propertyKey);
  };
}

export function IsNotNull() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('notNull', true, target, propertyKey);
  };
}

export function IsNotEmpty(options?: { message?: string }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('notEmpty', true, target, propertyKey);

    if (options?.message) {
      Reflect.defineMetadata(
        'notEmptyMessage',
        options.message,
        target,
        propertyKey,
      );
    }
  };
}
export function IsString() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'string', target, propertyKey);
  };
}

export function IsNumber() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'number', target, propertyKey);
  };
}

export function IsBoolean() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'boolean', target, propertyKey);
  };
}

export function IsDate() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'date', target, propertyKey);
  };
}

export function IsAny() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('isAny', true, target, propertyKey);
  };
}

export function IsArray() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'array', target, propertyKey);
  };
}

export function IsObject() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'object', target, propertyKey);
  };
}

export function IsEnum(enumType: any) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'enum', target, propertyKey);
    Reflect.defineMetadata('enumType', enumType, target, propertyKey);
  };
}

export function IsIn(values: any[]) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isIn', values, target, propertyKey);
  };
}

export function IsDefined() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isDefined', true, target, propertyKey);
  };
}

export function ValidIf(condition: string, condition2: string) {
  return function (target: any, propertyKey: string) {
      Reflect.defineMetadata('validIf', { condition, condition2 }, target, propertyKey);
  };
}

export function StartWith(prefix: string) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata('startWith', prefix, target, propertyKey);
    };
}

export function EndWith(field: string) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata('endWith', field, target, propertyKey);
    };
}

// export function StartWith(prefix: string, validationOptions?: ValidationOptions) {
//     return function (object: Object, propertyName: string) {
//         registerDecorator({
//             name: 'StartWith',
//             target: object.constructor,
//             propertyName: propertyName,
//             constraints: [prefix],
//             options: validationOptions,
//             validator: {
//                 validate(value: any, args: ValidationArguments) {
//                     const [requiredPrefix] = args.constraints;
//                     return typeof value === 'string' && value.startsWith(requiredPrefix);
//                 },
//                 defaultMessage(args: ValidationArguments) {
//                     const [requiredPrefix] = args.constraints;
//                     return `${args.property} must start with ${requiredPrefix}`;
//                 }
//             }
//         });
//     };
// }