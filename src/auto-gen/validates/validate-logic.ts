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
  data.data.forEach((item, index) => {
    rules.forEach((rule) => {
      
      const value = getValueByRecursion(item, rule.field)
      
      if (rule.customValidation && rule.required === true) {
        const customError = rule.customValidation(value, payload, item);
        if (customError) {

          errors.push(`[${index}] ${customError}`);
        }
      }
    });
  });

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}
