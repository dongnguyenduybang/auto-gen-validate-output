import { ValidationResult } from '../../helps/structures/responses';
import { validateLogicData } from '../validate-logic';
import { validationRulesMockUser } from './validate-rule-mock-user';

export function validateMockUserResponse(response: any, payload?: any): ValidationResult {
  const errors: string[] = [];

  if (response.ok !== true) {
    errors.push('Field "ok" must be true');
  }

  const dataValidation = validateLogicData( { data: response.data }, validationRulesMockUser, payload
  );
  if (!dataValidation.isValid) {
    errors.push(...dataValidation.errors.map((error) => `[data] ${error}`));
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}