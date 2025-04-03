import 'reflect-metadata';
export function IsBoolean() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'boolean', target, propertyKey);
    };
}