import { startsWith } from 'lodash';
import { ValidationRule } from '../../helps/structures/responses';

export const validationRulesMockChannel: ValidationRule[] = [
  {
    field: 'name',
    type: 'string',
    required: false,
    customValidation: (value, payload, data) => {
       
        if(!value.startsWith(payload.prefix)){
            return `Field "name" must be match with start with payload prefix`;
        } 
        return null;
    },
  }
];
