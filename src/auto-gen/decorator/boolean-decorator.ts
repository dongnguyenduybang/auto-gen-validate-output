import 'reflect-metadata';

/*
Check xem nó có phải là 1 type true/false hay không*/
export function IsBoolean() {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'boolean', target, propertyKey);
  };
}
