import { ValidationResult } from '../../helps/structures/responses';
import { validateLogicData } from '../validate-logic';
import {
  validationRulesMessage,
  validationRulesIncludes,
} from './validate-rule-send-message';

export function validateSendMessageResponse(
  response: any,
  payload?: any,
): ValidationResult {
  const errors: string[] = [];

  if (response.ok !== true) {
    errors.push('Field "ok" must be true');
  }

  const messageValidation = validateLogicData(
    { data: [response.data?.message] },
    validationRulesMessage,
    payload,
  );
  if (!messageValidation.isValid) {
    errors.push(
      ...messageValidation.errors.map((error) => `[message] ${error}`),
    );
  }

  if (response.includes) {
    for (const [key, rules] of Object.entries(validationRulesIncludes)) {
      const dataArray = response.includes[key];
      if (Array.isArray(dataArray)) {
        dataArray.forEach((item, index) => {
          const validationResult = validateLogicData(
            { data: [item] },
            rules,
            payload,
          );
          if (!validationResult.isValid) {
            errors.push(
              ...validationResult.errors.map(
                (error) => `[${key}[${index}]] ${error}`,
              ),
            );
          }
        });
      } else {
        errors.push(`Field "${key}" in includes must be an array`);
      }
    }
  } else {
    errors.push('Field "includes" is missing');
  }

  if (errors.length === 0 && response.data?.message?.messageId) {
    globalThis.globalVar.set('messageId', response.data.message.messageId);
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : null,
  };
}
