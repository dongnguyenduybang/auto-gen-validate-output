import 'reflect-metadata';
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

export function IsArray() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'array', target, propertyKey);
    };
}
