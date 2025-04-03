import 'reflect-metadata';

export function IsNumber() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'number', target, propertyKey);
    };
}

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