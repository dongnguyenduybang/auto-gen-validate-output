import { ValidationResult } from '../../helps/structures/responses';
import { validateLogicData } from '../validate-logic';
import { validationRulesMockFriend } from './validate-rule-mock-friend';

export function validateMockFriendResponse(
    response: any,
    payload?: any,
): ValidationResult {
    const errors: string[] = [];
    console.log(response)
    if (response.ok !== true) {
        errors.push('Field "ok" must be true');
    }

    if (payload?.quantity !== undefined && response.data.length !== payload.quantity) {
        errors.push(`Array "data" must contain exactly ${payload.quantity} objects`);
    }

    const dataValidation = validateLogicData(
        { data: response.data },
        validationRulesMockFriend,
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
