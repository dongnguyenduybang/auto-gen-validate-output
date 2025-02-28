import { ValidationResult } from '../../helps/structures/responses';
import { validateLogicData } from '../validate-logic';
import { validationRulesMockMessage } from './validate-rule-mock-message';

export function validateMockMessageResponse(
  response: any,
  payload?: any,
): ValidationResult {
    const errors: string[] = [];
    if (response.ok !== true) {
        errors.push('Field "ok" must be true');
    }
    if (payload?.quantity !== undefined && response.data.length !== payload.quantity) {
        errors.push(`Array "data" must contain exactly ${payload.quantity} objects`);
      }
    const dataValidation = validateLogicData(
        { data: response.data },
        validationRulesMockMessage,
        payload
    );
    if (!dataValidation.isValid) {
        errors.push(...dataValidation.errors.map((error) => `[data] ${error}`));
    }
    return {
        isValid: errors.length === 0,
        errors: errors.length > 0 ? errors : null,
    };
}
