import 'reflect-metadata';

/*
   Gán property kiểu date*/
export function IsDate() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'date', target, propertyKey);
  };
}
