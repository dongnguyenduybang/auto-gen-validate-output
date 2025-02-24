import { ErrorMessage } from '../enums/error-message.enum';
import {
  ValidationResult,
  ValidationRule,
} from '../helps/structures/responses';

export function validateLogicData(
  data: any,
  rules: ValidationRule[],
  payload?: any,
): ValidationResult {
  const errors: string[] = [];

  if (data.ok !== true) {
    errors.push('Field "ok" must be true');
  }

  if (Array.isArray(data.data)) {
    data.data.forEach((item, index) => {
      rules.forEach((rule) => {
        const value = item[rule.field];
        if (
          rule.optional === true &&
          (value === undefined || value === null || value === '')
        ) {
          return;
        }
        if (rule.required && value === undefined) {
          errors.push(
            ` Field "${rule.field}" ${ErrorMessage.UNDEFINED}`,
          );
          return;
        }
        if (rule.required && value === null) {
          errors.push(` Field "${rule.field}" ${ErrorMessage.NULL}`);
          return;
        }
        if (rule.required && value === '') {
          errors.push(`Field "${rule.field}" ${ErrorMessage.EMPTY}`);
          return;
        }

        if (rule.type) {
          if (rule.type === 'array') {
            if (!Array.isArray(value)) {
              errors.push(
                `[${index}] Field "${rule.field}" ${ErrorMessage.INVALID_TYPE} "${rule.type}", but got "${typeof value}"`,
              );
              return;
            }
          } else if (typeof value !== rule.type) {
            errors.push(
              ` Field "${rule.field}" ${ErrorMessage.INVALID_TYPE} "${rule.type}", but got "${typeof value}"`,
            );
            return;
          }
        }

        if (rule.type === 'string') {
          if (rule.minLength && value.length < rule.minLength) {
            errors.push(
              ` Field "${rule.field}" ${ErrorMessage.MIN_LENGTH} ${rule.minLength}`,
            );
          }
          if (rule.maxLength && value.length > rule.maxLength) {
            errors.push(
              ` Field "${rule.field}" ${ErrorMessage.MAX_LENGTH} ${rule.maxLength}`,
            );
          }
        }

        if (rule.type === 'number') {
          if (rule.min && value < rule.min) {
            errors.push(
              `Field "${rule.field}" ${ErrorMessage.MIN} ${rule.min}`,
            );
          }
          if (rule.max && value > rule.max) {
            errors.push(
              ` Field "${rule.field}" ${ErrorMessage.MAX} ${rule.max}`,
            );
          }
        }

        if (rule.customValidation) {
          const customError = rule.customValidation(value, payload, item);
          if (customError) {
            errors.push(` ${customError}`);
          }
        }
      });
    });
  } else {
    errors.push('Field "data" must be an array');
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}
