import 'reflect-metadata';

/*
   Gán property kiểu number
   */
export function IsNumber() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'number', target, propertyKey);
  };
}
/*
Gán min với tham số là value là số tối thiểu*/
export function Min(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('min', value, target, propertyKey);
  };
}
/*
Gán max với tham số là value là số tối đa*/
export function Max(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('max', value, target, propertyKey);
  };
}
