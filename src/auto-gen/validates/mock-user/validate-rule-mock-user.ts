import { ValidationRule } from '../../helps/structures/responses';

export const validationRulesMockUser: ValidationRule[] = [
  { field: 'userId', type: 'string', required: true },
  { field: 'username', type: 'string', required: true },
  { field: 'token', type: 'string', required: true },
  { field: 'securityKey', type: 'string', required: true },
  { field: 'recoverKey', type: 'string', required: true },
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
        return `Field "badge" must be equal to "${expectedBadge}"`;
      }
      return null;
    },
  },
];