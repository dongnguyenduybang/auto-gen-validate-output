import { ValidationResult } from '../../helps/structures/responses';
import { validateLogicData } from '../validate-logic';

import { validationRulesMessage } from './validate-rule-send-message';

export function validateSendMessageResponse(response: any, payload: any): ValidationResult {
  const errors: string[] = [];

  if (response.ok !== true) {
    errors.push('Field "ok" must be true');
  }

  const messageValidation = validateLogicData({ data: [response.data?.message] }, validationRulesMessage, payload );

  if (!messageValidation.isValid) {
    errors.push(...messageValidation.errors);
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}