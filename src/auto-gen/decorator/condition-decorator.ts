import 'reflect-metadata';
import { ValidIfOptions } from '../utils/declarations';

/*
    check điều kiện với condition là value filed đang set, operator là toán tử, condition 2 là value muốn so sánh 
    với condition2: string => 'aaa'
                    number => '0'
                    var => '{{...}}'*/

// export function ValidIf(condition: string, operator: string, condition2: any, result?: any) {
//   return (target: any, propertyKey: string) => {
//     // Lưu metadata vào target
//     Reflect.defineMetadata(
//       'validIf',
//       { condition, operator, condition2, result },
//       target,
//       propertyKey,
//     );

//     // Lưu metadata vào prototype để đảm bảo tương thích với getDecorators
//     if (typeof target === 'function') {
//       Reflect.defineMetadata(
//         'validIf',
//         { condition, operator, condition2, result },
//         target.prototype,
//         propertyKey,
//       );
//     } else {
//       Reflect.defineMetadata(
//         'validIf',
//         { condition, operator, condition2, result },
//         target.constructor.prototype,
//         propertyKey,
//       );
//     }
//   };
// }
export function ValidIf(
  conditionOrOptions: string | ValidIfOptions,
  operator?: string,
  value?: any,
  result?: any,
): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    let validIfData: ValidIfOptions;

    if (typeof conditionOrOptions === 'string') {
      // Cách sử dụng cũ: ValidIf(field, operator, value, result)
      validIfData = {
        conditions: {
          field: conditionOrOptions,
          operator: operator!,
          value: value,
        },
        result: result,
      };
    } else {
      // Cách sử dụng mới: ValidIf(options)
      validIfData = conditionOrOptions;
    }

    const defineMetadata = (target: any) => {
      Reflect.defineMetadata('validIf', validIfData, target, propertyKey);
    };

    // Lưu metadata vào target
    defineMetadata(target);

    // Lưu metadata vào prototype để đảm bảo tương thích
    if (typeof target === 'function') {
      defineMetadata(target.prototype);
    } else {
      defineMetadata(target.constructor.prototype);
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
