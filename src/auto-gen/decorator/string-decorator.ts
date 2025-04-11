import 'reflect-metadata';

/*
Check min lenght với kiểu chuỗi với tham số là value là số kí tự tối thiểu
*/
export function MinLength(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('minLength', value, target, propertyKey);
    };
}
/*
Check min lenght với kiểu chuỗi với tham số là value là số kí tự tối đa
*/
export function MaxLength(value: number) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('maxLength', value, target, propertyKey);
    };
}
/*
Check có phải là kiểu chuỗi hay không
*/
export function IsString(options?: {
    message?: string;
    value?: any;
}): PropertyDecorator {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata('type', 'string', target, propertyKey);

        if (options?.message) {
            Reflect.defineMetadata(
                'customErrorString',
                options.message,
                target,
                propertyKey,
            );
        }

        if (options?.value !== undefined) {
            Reflect.defineMetadata('fieldValue', options.value, target, propertyKey);
        }
    };
}
