// Decorator Min
export function Min(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('min', value, target, propertyKey);
    };
}

// Decorator Max
export function Max(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('max', value, target, propertyKey);
    };
}

// Decorator MinLength
export function MinLength(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('minLength', value, target, propertyKey);
    };
}

// Decorator MaxLength
export function MaxLength(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('maxLength', value, target, propertyKey);
    };
}

// Decorator MinArray
export function MinArray(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('minArray', value, target, propertyKey);
    };
}

// Decorator MaxArray
export function MaxArray(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('maxArray', value, target, propertyKey);
    };
}

// Decorator IsOptional
export function IsOptional() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('optional', true, target, propertyKey);
    };
}

// Decorator IsOptional
export function IsNotNull() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('notNull', true, target, propertyKey);
    };
}

// Decorator IsOptional
export function IsNotEmpty() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('notEmpty', true, target, propertyKey);
    };
}

// Decorator IsString
export function IsString() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'string', target, propertyKey);
    };
}

// Decorator IsNumber
export function IsNumber() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'number', target, propertyKey);
    };
}

// Decorator IsBoolean
export function IsBoolean() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'boolean', target, propertyKey);
    };
}

// Decorator IsDate
export function IsDate() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'date', target, propertyKey);
    };
}

// Decorator IsAny
export function IsAny() {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata('isAny', true, target, propertyKey);
    };
}
// Decorator IsArray
export function IsArray() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'array', target, propertyKey);
    };
}

