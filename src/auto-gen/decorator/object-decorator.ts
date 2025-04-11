import 'reflect-metadata';
/*
Check xem có phải là kiểu object hay không
*/
export function IsObject() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'object', target, propertyKey);
    };
}