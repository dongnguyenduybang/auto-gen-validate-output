import { ValidationResult } from '../../helps/structures/responses';
import { validateLogicData } from '../validate-logic';
import { validationRulesMockChannel } from './validate-rule-mock-channel';

export function validateMockChannelResponse(
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
    validationRulesMockChannel,
    payload
  );
  if (!dataValidation.isValid) {
    errors.push(...dataValidation.errors.map((error) => `[data] ${error}`));
  }
  const [firstChannel] = response.data || []
  if (errors.length === 0 && firstChannel?.name) {
    globalThis.globalVar.set('prefix', firstChannel.name);
  }else {
    console.log('No valid "prefix" found in channel');
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}


