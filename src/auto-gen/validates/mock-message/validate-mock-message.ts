import { ValidationRule } from '../../helps/structures/responses';

export const validationRulesMockMessage: ValidationRule[] = [
  {
    field: 'data',
    type: 'array',
    required: true,
    customValidation: (value: any, payload?: any) => {
      if (payload && payload.quantity !== undefined) {
        if (value.length !== payload.quantity) {
          return `The length of "data" (${value.length}) must match the "quantity" (${payload.quantity})`;
        }
      }
      return null;
    },
  },
];
