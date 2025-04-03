import 'reflect-metadata';

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
export function IsIn(values: any[]) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('isIn', values, target, propertyKey);
    };
}

export function IsAny() {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata('isAny', true, target, propertyKey);
    };
}



