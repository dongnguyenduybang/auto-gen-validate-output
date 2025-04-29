import 'reflect-metadata';

/*
Gán property type boolean*/
export function IsBoolean() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'boolean', target, propertyKey);
  };
}
