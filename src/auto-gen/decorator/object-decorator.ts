import 'reflect-metadata';
export function IsObject() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'object', target, propertyKey);
    };
}