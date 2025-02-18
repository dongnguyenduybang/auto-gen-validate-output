import { ValidationRule } from "../../helps/structures/responses";

export const validationRulesMockChannel: ValidationRule[] = [
    {
      field: 'channelId',
      type: 'string',
      required: true,
      minLength: 10,
      maxLength: 50, 
    },

    {
      field: 'name',
      type: 'string',
      required: false, 
    },

    {
      field: 'ownerId',
      type: 'string',
      required: true,
      minLength: 10, 
      maxLength: 50, 
    },

    {
      field: 'messageIds',
      type: 'array',
      required: false,
      minArray: 0, 
      maxArray: 100,
      customValidation: (value) => {
        if (!Array.isArray(value)) {
          return `Field "messageIds" must be an array`;
        }
        for (const id of value) {
          if (typeof id !== 'string' || id.length < 10 || id.length > 50) {
            return `Field "messageIds" contains invalid ID: "${id}"`;
          }
        }
        return null;
      },
    },

    {
      field: 'memberIds',
      type: 'array',
      required: false,
      minArray: 0,
      maxArray: 100, 
      customValidation: (value) => {
        if (!Array.isArray(value)) {
          return `Field "memberIds" must be an array`;
        }
        for (const id of value) {
          if (typeof id !== 'string' || id.length < 10 || id.length > 50) {
            return `Field "memberIds" contains invalid ID: "${id}"`;
          }
        }
        return null;
      },
    },
  ];