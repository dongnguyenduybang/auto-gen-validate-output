import { ErrorMessage } from '../enums/error-message.enum';
import {
  ValidationResult,
  ValidationRule,
} from '../helps/structures/responses';
import { getValueByRecursion } from '../helps/utils';

export function validateLogicData(
  data: any,
  rules: ValidationRule[],
  payload?: any,
): ValidationResult {
  const errors: string[] = [];

  if (Array.isArray(data.data)) {
    data.data.forEach((item, index) => {
      rules.forEach((rule) => {
        const value = getValueByRecursion(item, rule.field);
        if (rule.optional === true && (value === undefined || value === null)) {
          return;
        }
        if (rule.required && value === undefined) {
          errors.push(
            `[${index}] Field "${rule.field}" ${ErrorMessage.UNDEFINED}`,
          );
          return;
        }
        if (rule.required && value === null) {
          errors.push(`[${index}] Field "${rule.field}" ${ErrorMessage.NULL}`);
          return;
        }
        if (rule.required && value === '') {
          errors.push(`[${index}] Field "${rule.field}" ${ErrorMessage.EMPTY}`);
          return;
        }
        if (rule.type) {
          if (rule.type === 'array') {
            if (!Array.isArray(value)) {
              errors.push(
                `[${index}] Field "${rule.field}" ${ErrorMessage.INVALID_TYPE} "${rule.type}"`,
              );
              return;
            }
          } else if (typeof value !== rule.type) {
            errors.push(
              `[${index}] Field "${rule.field}" ${ErrorMessage.INVALID_TYPE} "${rule.type}"`,
            );
            return;
          }
        }
        if (rule.type === 'string') {
          if (rule.minLength && value.length < rule.minLength) {
            errors.push(
              `[${index}] Field "${rule.field}" ${ErrorMessage.MIN_LENGTH} ${rule.minLength}`,
            );
          }
          if (rule.maxLength && value.length > rule.maxLength) {
            errors.push(
              `[${index}] Field "${rule.field}" ${ErrorMessage.MAX_LENGTH} ${rule.maxLength}`,
            );
          }
        }
        if (rule.type === 'number') {
          if (rule.min && value < rule.min) {
            errors.push(
              `[${index}] Field "${rule.field}" ${ErrorMessage.MIN} ${rule.min}`,
            );
          }
          if (rule.max && value > rule.max) {
            errors.push(
              `[${index}] Field "${rule.field}" ${ErrorMessage.MAX} ${rule.max}`,
            );
          }
        }
        if (rule.customValidation) {
          const customError = rule.customValidation(value, payload, item);
          if (customError) {
            errors.push(`[${index}] ${customError}`);
          }
        }
      });
    });
  } else {
    errors.push('Field "data" must be an array');
  }

  if (data.message?.messageId) {
    console.log(data.message.messageId);
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}
