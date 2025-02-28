import { ValidationRule } from '../../helps/structures/responses';

export const validationRulesMockUser: ValidationRule[] = [
  {
    field: 'username',
    type: 'string',
    required: true,
    customValidation: (value, payload, data) => {
      const expectedUsername = `${payload.prefix}${data.userId}`;
      if (value !== expectedUsername) {
        return `"username" must be match with prefix + userId`;
      }
      return null;
    },
  },
  {
    field: 'badge',
    type: 'number',
    required: true,
    customValidation: (value, payload) => {
      if (value !== payload.badge) {
        return `"badge" must be match with payload`;
      }
      return null;
    },
  },
];
