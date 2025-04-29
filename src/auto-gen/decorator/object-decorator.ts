import 'reflect-metadata';

/*
Gán property kiểu object*/
export function IsObject() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'object', target, propertyKey);
  };
}
