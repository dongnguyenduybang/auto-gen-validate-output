import 'reflect-metadata';

/*
   check property đó có phải là kiểu số hay không
   */
export function IsNumber() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'number', target, propertyKey);
  };
}
/*
Check min với kiểu số với tham số là value là số tối thiểu*/
export function Min(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('min', value, target, propertyKey);
  };
}
/*
Check max với kiểu số với tham số là value là số tối đa*/
export function Max(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('max', value, target, propertyKey);
  };
}
