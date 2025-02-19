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
  for (const rule of rules) {
    const value = data[rule.field];
    if (
      rule.optional === true &&
      (value === undefined || value === null || value === '')
    ) {
      continue;
    }

    if (rule.required && value === undefined) {
      errors.push(`Field "${rule.field}" ${ErrorMessage.UNDEFINED}`);
      continue;
    }

    if (rule.required && value === null) {
      errors.push(`Field "${rule.field}" ${ErrorMessage.NULL}`);
      continue;
    }

    if (rule.required && value === '') {
      errors.push(`Field "${rule.field}" ${ErrorMessage.EMPTY}`);
      continue;
    }

    if (rule.type && typeof value !== rule.type) {
      errors.push(
        `Field "${rule.field}" must be of type "${rule.type}", but got "${typeof value}"`,
      );
      continue;
    }

    if (
      rule.type === 'string' &&
      rule.minLength &&
      value.length < rule.minLength
    ) {
      errors.push(
        `Field "${rule.field}" must a minimum length of ${rule.minLength}`,
      );
    }

    if (
      rule.type === 'string' &&
      rule.maxLength &&
      value.length > rule.maxLength
    ) {
      errors.push(
        `Field "${rule.field}" must a maximum length of ${rule.maxLength}`,
      );
    }

    if (rule.type === 'number' && rule.min && value.length < rule.min) {
      errors.push(`Field "${rule.field}" must a minimum of ${rule.min}`);
    }

    if (rule.type === 'number' && rule.max && value.length > rule.max) {
      errors.push(`Field "${rule.field}" must a maximum of ${rule.max}`);
    }

    if (rule.type === 'array') {
      if (rule.minArray && value.length < rule.minArray) {
        errors.push(
          `Field "${rule.field}" must at least ${rule.minArray} items`,
        );
      }
      if (rule.maxArray && value.length > rule.maxArray) {
        errors.push(
          `Field "${rule.field}" must at most ${rule.maxArray} items`,
        );
      }
    }

    if (rule.type === 'date') {
      if (rule.minDate && value < rule.minDate) {
        errors.push(
          `Field "${rule.field}" must be on or after ${rule.minDate.toISOString()}`,
        );
      }
      if (rule.maxDate && value > rule.maxDate) {
        errors.push(
          `Field "${rule.field}" must be on or before ${rule.maxDate.toISOString()}`,
        );
      }
    }

    if (rule.customValidation) {
      const customError = rule.customValidation(value, payload, data);
      if (customError) {
        errors.push(customError);
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}
