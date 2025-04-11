import 'reflect-metadata';


/*
   check có phải là kiểu optional hay không 

*/
export function IsOptional() {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata('optional', true, target, propertyKey);
    };
}

/*
   check property đó không được null
   
*/
export function IsNotNull() {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('notNull', true, target, propertyKey);
    };
}
/*
   check property đó không được rỗng
   
*/
export function IsNotEmpty(options?: { message?: string }) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('notEmpty', true, target, propertyKey);

        if (options?.message) {
            Reflect.defineMetadata(
                'notEmptyMessage',
                options.message,
                target,
                propertyKey,
            );
        }
    };
}

/*
   check property đó phải được xác định
   
*/
export function IsDefined(options?: { message?: string }) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('isDefined', true, target, propertyKey);
        if (options?.message) {
            Reflect.defineMetadata(
                'notUndefinedMessage',
                options.message,
                target,
                propertyKey,
            );
        }
    };
}

/*
   check property đó là kiểu any
   
*/
export function IsAny() {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata('isAny', true, target, propertyKey);
    };
}



