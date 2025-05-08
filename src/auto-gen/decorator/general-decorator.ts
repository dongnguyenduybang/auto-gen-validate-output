import 'reflect-metadata';

/*
   check có phải là kiểu optional hay không 
*/
export function IsOptional() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('optional', true, target, propertyKey);
  };
}

/*
   check property đó không được null*/
export function IsNotNull(options?: { message?: string }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isNotNull', true, target, propertyKey);

    if (options?.message) {
      Reflect.defineMetadata(
        'isNotNullMessage',
        options.message,
        target,
        propertyKey,
      );
    }
  };
}
/*
   check property đó không được rỗng
   */
export function IsNotEmpty(options?: { message?: string }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isNotEmpty', true, target, propertyKey);

    if (options?.message) {
      Reflect.defineMetadata(
        'isNotEmptyMessage',
        options.message,
        target,
        propertyKey,
      );
    }
  };
}

/*
   check property đó phải được xác định
   */
export function IsDefined(options?: { message?: string }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isDefined', true, target, propertyKey);
    if (options?.message) {
      Reflect.defineMetadata(
        'isDefinedMessage',
        options.message,
        target,
        propertyKey,
      );
    }
  };
}

/*
   check property đó là kiểu any
   */
export function IsAny() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('isAny', true, target, propertyKey);
  };
}

/* xác định value có custom message error */
export function IsInvalid(options: { message: string }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isInvalid', true, target, propertyKey);
    if (options?.message) {
      Reflect.defineMetadata(
        'isInvalidMessage',
        options.message,
        target,
        propertyKey,
      );
    }
  };
}

/* check value là một ULID */
export function IsULID() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('isULID', true, target, propertyKey);
  };
}

export function IsEmoji() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('isEmoji', true, target, propertyKey);
  };
}
