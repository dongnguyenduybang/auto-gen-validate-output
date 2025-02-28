import { ValidationRule } from '../../helps/structures/responses';
export const validationRulesMessage: ValidationRule[] = [
  {
    field: 'createTime',
    type: 'string',
    required: true,
    customValidation: (value) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
      if (!dateRegex.test(value)) {
        return `"createTime" must be format ISO string`;
      }
      const createTime = new Date(value);
      if (isNaN(createTime.getTime())) {
        return `"createTime" is not a valid date`;
      }
      return null;
    },
  },
  {
    field: 'updateTime',
    type: 'string',
    required: true,
    customValidation: (value, data) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
      if (!dateRegex.test(value)) {
        return `"updateTime" must be format ISO string`;
      }
      const updateTime = new Date(value);
      const createTime = new Date(data.createTime);
      if (updateTime < createTime) {
        return `"updateTime" must not be less than "createTime"`;
      }
      return null;
    },
  },
  { field: 'ref', type: 'string', required: true },
];

export const validationRulesIncludes: Record<string, ValidationRule[]> = {
  users: [
    {
      field: 'createTime',
      type: 'string',
      required: true,
      customValidation: (value) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
        if (!dateRegex.test(value)) {
          return `"createTime" must be format ISO string`;
        }
        const createTime = new Date(value);
        if (isNaN(createTime.getTime())) {
          return `"createTime" is not a valid date`;
        }
        return null;
      },
    },
    {
      field: 'updateTime',
      type: 'string',
      required: true,
      customValidation: (value, data) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
        if (!dateRegex.test(value)) {
          return `"updateTime" must be format ISO string`;
        }
        const updateTime = new Date(value);
        const createTime = new Date(data.createTime);
        if (updateTime < createTime) {
          return `"updateTime" must not be less than "createTime"`;
        }
        return null;
      },
    },
  ],
  channels: [
   
  ],
  members: [
   
  ],
  channelMetadata: [
   
  ],
};
