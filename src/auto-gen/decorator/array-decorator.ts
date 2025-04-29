import 'reflect-metadata';

/*
Gán min array với tham số là value số lượng mảng tối thiểu*/
export function MinArray(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('minArray', value, target, propertyKey);
  };
}

/*
Gán min array với tham số là value số lượng mảng tối đa*/
export function MaxArray(value: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('maxArray', value, target, propertyKey);
  };
}

/*
Gán property kiểu array*/
export function IsArray() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'array', target, propertyKey);
  };
}
