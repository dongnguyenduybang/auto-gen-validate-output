/* eslint-disable prettier/prettier */
import 'reflect-metadata';
import { getDecorators } from '../helps/dto-helper';
import { ErrorMessage } from '../enums/error-message.enum';
import { resolveValidIf } from '../helps/utils';

export function validateResponses(
  payload: any,
  instance: any,
): string[] {
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
      // console.log(decorators)
      if (
        decorators.type === 'object' &&
        typeof valueResponse === 'object' &&
        valueResponse !== null
      ) {
        const nestedPrototype = Object.getPrototypeOf(valueResponse);
        validateObject(valueResponse, nestedPrototype, field);
      } else if (decorators.type === 'array' && Array.isArray(valueResponse)) {
        for (const [index, item] of valueResponse.entries()) {
          const nestedPrototype = Object.getPrototypeOf(item);
          await validateObject(item, nestedPrototype, `${field}[${index}]`);
        }
      } else if (decorators.optional && valueResponse === undefined) {
        return;
      } else if (
        decorators.isDefined &&
        (valueResponse === undefined || valueResponse === null)
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
        if (decorators.validIf) {
          const isValid = resolveValidIf(
            field,
            decorators.validIf,
            valueResponse,
            obj,
            payload,
          );
          if (isValid.isValid === false) {
            errors.push(isValid.errorMessage);
          }
        }
      }
    }
  }

  const prototype = Object.getPrototypeOf(instance);
  validateObject(instance, prototype);
  return errors;
}
