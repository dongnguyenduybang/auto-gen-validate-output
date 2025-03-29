import 'reflect-metadata';

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
export function IsString(options?: {
  message?: string;
  value?: any;
}): PropertyDecorator {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'string', target, propertyKey);

    if (options?.message) {
      Reflect.defineMetadata(
        'customErrorString',
        options.message,
        target,
        propertyKey,
      );
    }

    if (options?.value !== undefined) {
      Reflect.defineMetadata('fieldValue', options.value, target, propertyKey);
    }
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

export function IsDefined(options?: { message?: string }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isDefined', true, target, propertyKey);
    if (options?.message) {
      Reflect.defineMetadata(
        'notUndefinedMessage',
        options.message,
        target,
        propertyKey,
      );
    }
  };
}

export function ValidIf(condition: string, operators: any, condition2: any) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata(
      'validIf',
      { condition, operators, condition2 },
      target,
      propertyKey,
    );
  };
}

export function StartWith(field: string, value: string) {
  return  (target: any, propertyKey: string) => {
    Reflect.defineMetadata('startWith', { field, value }, target, propertyKey);
  };
}

export function EndWith(field: string, value: string) {
  return  (target: any, propertyKey: string) => {
    Reflect.defineMetadata('endWith', { field, value }, target, propertyKey);
  };
}
