import 'reflect-metadata';
import { ErrorMessage } from '../enums';
import { getDecorators } from '../utils/dto-helper';
import { resolveValidIf, resolveVariables } from '../utils/helper';
<<<<<<< HEAD
=======

>>>>>>> main
export async function validateResponses(
  payload: any,
  instance: any,
  context,
): Promise<string[]> {
  const errors: string[] = [];
  async function validateObject(
    obj: any,
    prototype: any,
    path: string = '',
  ): Promise<void> {
    const keys = Object.keys(obj);

    for (const key of keys) {
      const valueResponse = obj[key];
      const field = path ? `${path}.${key}` : key;

      const decorators = getDecorators(prototype, key);
      if (
        decorators.type === 'object' &&
        typeof valueResponse === 'object' &&
        valueResponse !== null
      ) {
        if (
          decorators.optional &&
          (valueResponse === undefined || valueResponse === null)
        ) {
          return;
        } else {
          const nestedPrototype = Object.getPrototypeOf(valueResponse);
          await validateObject(valueResponse, nestedPrototype, field);
        }
      } else if (decorators.type === 'array' && Array.isArray(valueResponse)) {
        if (
          decorators.optional &&
          (valueResponse === undefined || valueResponse === null)
        ) {
          return;
        } else {
          for (const [index, item] of valueResponse.entries()) {
            const nestedPrototype = Object.getPrototypeOf(item);
            await validateObject(item, nestedPrototype, `${field}[${index}]`);
          }
        }
      } else if (
        decorators.optional &&
        (valueResponse === undefined || valueResponse === null)
      ) {
        return;
      } else if (
        decorators.isDefined &&
        (valueResponse === undefined || valueResponse === null) &&
        !decorators.validIf
      ) {
        errors.push(`${field} ${ErrorMessage.DEFINED}`);
        continue;
      } else if (decorators.type === 'enum') {
        const enumValues = Object.values(decorators.enumType);
        if (!enumValues.includes(valueResponse)) {
          const filterNumber = enumValues.filter(
            (val) => typeof val === 'number',
          );
          errors.push(
            `${field} ${ErrorMessage.INVALID_RANGE_NUMBER} ${filterNumber.join(', ')}`,
          );
        }
        continue;
      } else if (decorators.notEmpty && valueResponse === '') {
        errors.push(`${field} ${ErrorMessage.EMPTY}`);
        continue;
      } else {
        if (decorators.type === 'string' && typeof valueResponse !== 'string') {
          errors.push(`${field} ${ErrorMessage.INVALID_TYPE_STRING}`);
        }

        if (decorators.type === 'number' && typeof valueResponse !== 'number') {
          errors.push(`${field} ${ErrorMessage.INVALID_TYPE_NUMBER}`);
        }

        if (
          decorators.type === 'boolean' &&
          typeof valueResponse !== 'boolean'
        ) {
          errors.push(`${field} ${ErrorMessage.INVALID_TYPE_BOOLEAN}`);
        }

        if (decorators.startWith && typeof valueResponse === 'string') {
          if (Array.isArray(decorators.startWith)) {
            let [value] = decorators.startWith;
            if (value.startsWith('{{')) {
              value = resolveVariables(value, context);
            }
            if (!value || !valueResponse.startsWith(value)) {
              errors.push(`${field} must start with ${value}`);
            }
          } else if (
            typeof decorators.startWith === 'object' &&
            decorators.startWith !== null
          ) {
            let { value } = decorators.startWith;
            if (value.startsWith('{{')) {
              value = resolveVariables(value, context);
            }
            if (valueResponse.startsWith(value) === false) {
              console.log(value);
              errors.push(`${field} must start with ${value}`);
            }
          } else {
            let [value] = decorators.startWith;
            if (value.startsWith('{{')) {
              value = resolveVariables(value, context);
            }
            if (!value || !valueResponse.startsWith(value)) {
              errors.push(`${field} must start with ${value}`);
            }
          }
        }

        //check endWith
        if (decorators.endWith && typeof valueResponse === 'string') {
          if (Array.isArray(decorators.endWith)) {
            let [value] = decorators.endWith;
            if (value.startsWith('{{')) {
              value = resolveVariables(value, context);
            }
            if (!value || !valueResponse.endsWith(value)) {
              errors.push(`${field} must end with ${value}`);
            }
          } else if (
            typeof decorators.endWith === 'object' &&
            decorators.endWith !== null
          ) {
            let { value } = decorators.endWith;
            if (value.startsWith('{{')) {
              value = resolveVariables(value, context);
            }
            if (!value || !valueResponse.endsWith(value)) {
              errors.push(`${field} must end with ${value}`);
            }
          } else {
            let { value } = decorators.endWith;
            if (value.startsWith('{{')) {
              value = resolveVariables(value, context);
            }
            if (!value || !valueResponse.endsWith(value)) {
              errors.push(`${field} must end with ${value}`);
            }
          }
        }

        if (decorators.validIf) {
          const isValid = resolveValidIf(
            field,
            decorators.validIf,
            valueResponse,
            obj,
            payload,
            context,
          );
          if (isValid.isValid === false) {
            errors.push(isValid.errorMessage);
          }
        }
      }
    }
  }

  const prototype = Object.getPrototypeOf(instance);
  await validateObject(instance, prototype);
  return errors;
}
