import 'reflect-metadata';

/*
Check min array với tham số là value số lượng mảng tối thiểu
*/
export function MinArray(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('minArray', value, target, propertyKey);
    };
}

/*
Check min array với tham số là value số lượng mảng tối đa
*/
export function MaxArray(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('maxArray', value, target, propertyKey);
    };
}

/*
Check xem có phải là 1 array hay không 
*/
export function IsArray() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'array', target, propertyKey);
    };
}
