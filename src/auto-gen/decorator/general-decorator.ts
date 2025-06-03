import 'reflect-metadata';

/*
   check có phải là kiểu optional hay không 
*/
export function IsOptional(options?: { value?: any }) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('optional', true, target, propertyKey);
    if (options?.value) {
      Reflect.defineMetadata(
        'optionalValid',
        options.value,
        target,
        propertyKey,
      );
    }
  };
}

/*
   check property đó không được null*/
export function IsNotNull(options?: { message?: string }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('notNull', true, target, propertyKey);

    if (options?.message) {
      Reflect.defineMetadata(
        'notNullMessage',
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
    Reflect.defineMetadata('notEmpty', true, target, propertyKey);

    if (options?.message) {
      Reflect.defineMetadata(
        'notEmptyMessage',
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
        'notUndefinedMessage',
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
export function IsInvalid(options?: { message?: string }) {
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

export function isValidURL(options?: { url?: string }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isValidURL', true, target, propertyKey);
    if (options?.url) {
      Reflect.defineMetadata(
        'isValidURL',
        options.url,
        target,
        propertyKey,
      );
    }
  };
}

export function IsEmoji(options?: { value?: number }) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isEmoji', true, target, propertyKey);
    if (options?.value) {
      Reflect.defineMetadata(
        'isValidEmoji',
        options.value,
        target,
        propertyKey,
      );
    }
  };
}

export function GenEmoji(emoji: any, quantity?: number) {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('genEmoji', true, target, propertyKey);
    if (emoji) {
      Reflect.defineMetadata(
        'genEmoji',
         {emoji, quantity },
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

export function IsUnique() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('isUnique', true, target, propertyKey);
  };
}

export function GenULID() {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata('genULID', true, target, propertyKey);
  };
}

export function IsMath(options?: {
  message?: string;
  value?: any;
}): PropertyDecorator {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('isMath', true, target, propertyKey);

    if (options?.message) {
      Reflect.defineMetadata(
        'mathMessage',
        options.message,
        target,
        propertyKey,
      );
    }

    if (options?.value !== undefined) {
      Reflect.defineMetadata('fieldValue', options.value, target, propertyKey);
    }
  };
}


