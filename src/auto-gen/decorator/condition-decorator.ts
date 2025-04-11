import 'reflect-metadata';

/*
    check điều kiện với condition là value filed đang set, operator là toán tử, condition 2 là value muốn so sánh 
    với condition2: string => 'aaa'
                    number => '0'
                    var => '{{...}}'
*/
export function ValidIf(condition: string, operators: any, condition2: any) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata(
            'validIf',
            { condition, operators, condition2 },
            target,
            propertyKey,
        );
    };
}


/*
   check chuỗi kí tự đầu tiên có bằng với value không 
   với filed là property muốn check
       value là chuỗi muốn check
*/
export function StartWith(field: string, value: string) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('startWith', { field, value }, target, propertyKey);
        if (typeof target === 'function') {
            Reflect.defineMetadata(
                'startWith', 
                { field, value }, 
                target.prototype, 
                propertyKey
            );
        } else {
            Reflect.defineMetadata(
                'startWith', 
                { field, value }, 
                target.constructor.prototype, 
                propertyKey
            );
        }
    };
}

/*
   check chuỗi kí tự cuối cùng có bằng với value không 
   với filed là property muốn check
       value là chuỗi muốn check
*/
export function EndWith(field: string, value: string) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('endWith', { field, value }, target, propertyKey);
        if (typeof target === 'function') {
            Reflect.defineMetadata(
                'endWith', 
                { field, value }, 
                target.prototype, 
                propertyKey
            );
        } else {
            Reflect.defineMetadata(
                'endWith', 
                { field, value }, 
                target.constructor.prototype, 
                propertyKey
            );
        }
    };
}
