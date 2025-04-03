import 'reflect-metadata';
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
