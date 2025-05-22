import 'reflect-metadata';

/*
    check điều kiện với condition là value filed đang set, operator là toán tử, condition 2 là value muốn so sánh 
    với condition2: string => 'aaa'
                    number => '0'
                    var => '{{...}}'*/

export function ValidIf(condition: string, operator: string, condition2: any) {
  return (target: any, propertyKey: string) => {
    // Lưu metadata vào target
    Reflect.defineMetadata(
      'validIf',
      { condition, operator, condition2 },
      target,
      propertyKey,
    );

    // Lưu metadata vào prototype để đảm bảo tương thích với getDecorators
    if (typeof target === 'function') {
      Reflect.defineMetadata(
        'validIf',
        { condition, operator, condition2 },
        target.prototype,
        propertyKey,
      );
    } else {
      Reflect.defineMetadata(
        'validIf',
        { condition, operator, condition2 },
        target.constructor.prototype,
        propertyKey,
      );
    }
  };
}
/*
   check chuỗi kí tự đầu tiên có bằng với value không 
   với filed là property muốn check
       value là chuỗi muốn check*/
export function StartWith(fieldCheck: string, value: string) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata(
      'startWith',
      { fieldCheck, value },
      target,
      propertyKey,
    );
    if (typeof target === 'function') {
      Reflect.defineMetadata(
        'startWith',
        { fieldCheck, value },
        target.prototype,
        propertyKey,
      );
    } else {
      Reflect.defineMetadata(
        'startWith',
        { fieldCheck, value },
        target.constructor.prototype,
        propertyKey,
      );
    }
  };
}

/*
   check chuỗi kí tự cuối cùng có bằng với value không 
   với filed là property muốn check
       value là chuỗi muốn check*/
export function EndWith(field: string, value: string) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('endWith', { field, value }, target, propertyKey);
    if (typeof target === 'function') {
      Reflect.defineMetadata(
        'endWith',
        { field, value },
        target.prototype,
        propertyKey,
      );
    } else {
      Reflect.defineMetadata(
        'endWith',
        { field, value },
        target.constructor.prototype,
        propertyKey,
      );
    }
  };
}
