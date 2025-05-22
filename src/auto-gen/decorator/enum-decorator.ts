import 'reflect-metadata';

/*
   check có phải là kiểu enum hay không*/
export function IsEnum(enumType: any) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('type', 'enum', target, propertyKey);
    Reflect.defineMetadata('enumType', enumType, target, propertyKey);
  };
}
