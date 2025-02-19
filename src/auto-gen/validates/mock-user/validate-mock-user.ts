import { ValidationRule } from '../../helps/structures/responses';

export const validationRulesMockUser: ValidationRule[] = [
  {
    field: 'userId',
    type: 'string',
    required: true,
    minLength: 10,
    maxLength: 50,
  },
  {
    field: 'username',
    type: 'string',
    required: true,
    customValidation: (value, payload, data) => {
      const expectedUsername = `${payload?.prefix}${data.userId}`;
      if (value !== expectedUsername) {
        return `Field "username" must be equal to "${expectedUsername}", but got "${value}"`;
      }
      return null;
    },
  },
  {
    field: 'token',
    type: 'string',
    required: true,
    minLength: 50,
    maxLength: 200,
  },
  {
    field: 'securityKey',
    type: 'string',
    required: true,
    minLength: 64,
    maxLength: 64,
  },
  {
    field: 'recoverKey',
    type: 'string',
    required: true,
    minLength: 64,
    maxLength: 64,
  },
  {
    field: 'badge',
    type: 'number',
    required: true,
    min: 0,
    max: 3,
    customValidation: (value, payload) => {
      const expectedBadge = Number(payload?.badge);
      if (isNaN(expectedBadge)) {
        return `Field "badge" has invalid payload value: ${payload?.badge}`;
      }
      if (value !== expectedBadge) {
        return `Field "badge" must be equal to "${expectedBadge}", but got "${value}"`;
      }
      return null;
    },
  },
];
