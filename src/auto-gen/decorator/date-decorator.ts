import 'reflect-metadata';

/*
   check có phải là type date hay không
*/
export function IsDate() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'date', target, propertyKey);
    };
}
