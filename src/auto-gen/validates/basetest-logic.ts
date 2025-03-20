// import 'reflect-metadata';
// import { getDecorators } from '../helps/dto-helper';

// export function validateDecorators(instance: any, payload: any): string[] {
//   const errors: string[] = [];

//   const channelId = '01JNDQSGVJBQ8NH66MKFJ9A37C';
//   const userId = '01JNDQS267EPQMAE82DGVQ19RB';
//   const token =
//     'f5XsbEauqO4LlCnKO5TFPqQ7-hBIxYPgkHkNKpTM1OYe8HNRFlPOXMdue6oQubAc5z6FWjjzj0spu4zeL4CDlw';

//   async function validateObject(
//     obj: any,
//     prototype: any,
//     path: string = '',
//   ): Promise<void> {
//     const keys = Object.keys(obj);

//     for (const key of keys) {
//       const value = obj[key];
//       const field = path ? `${path}.${key}` : key;

//       const decorators = getDecorators(prototype, key);
//       if (decorators.type === 'array' && Array.isArray(value)) {
//         const quantityArray = payload?.quantity;

//         if (quantityArray !== undefined && value.length !== quantityArray) {
//           errors.push(`${field} must have exactly ${quantityArray} obj`);
//         }
//       }

//       console.log();
//     }
//   }

//   const prototype = Object.getPrototypeOf(instance);
//   validateObject(instance, prototype);

//   return errors;
// }
