import 'reflect-metadata';
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

export function EndWith(field: string, value: string) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('endWith', { field, value }, target, propertyKey);
    };
}
