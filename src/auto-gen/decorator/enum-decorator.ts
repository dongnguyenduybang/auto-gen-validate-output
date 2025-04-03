import 'reflect-metadata';
export function IsEnum(enumType: any) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'enum', target, propertyKey);
        Reflect.defineMetadata('enumType', enumType, target, propertyKey);
    };
}