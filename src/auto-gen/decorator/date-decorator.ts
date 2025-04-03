import 'reflect-metadata';
export function IsDate() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'date', target, propertyKey);
    };
}
