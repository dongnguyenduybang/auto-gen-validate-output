import { ValidationRule } from '../../helps/structures/responses';

export const validationRulesMockUser: ValidationRule[] = [
  { field: 'userId', type: 'string', required: true },
  {
    field: 'username',
    type: 'string',
    required: true,
    customValidation: (value, payload, data) => {
      const expectedUsername = `${payload.prefix}${data.userId}`;
      if (value !== expectedUsername) {
        return `Field "username" must be match with prefix + userId`;
      }
      return null;
    },
  },
  { field: 'token', type: 'string', required: true },
  { field: 'securityKey', type: 'string', required: true },
  { field: 'recoverKey', type: 'string', required: true },
  {
    field: 'badge',
    type: 'number',
    required: true,
    customValidation: (value, payload) => {
      if (value !== payload.badge) {
        return `Field "badge" must be match with payload`;
      }
      return null;
    },
  },
];
