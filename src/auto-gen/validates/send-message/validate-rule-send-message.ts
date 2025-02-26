import { ValidationRule } from '../../helps/structures/responses';

export const validationRulesMessage: ValidationRule[] = [
  {
    field: 'workspaceId',
    type: 'string',
    required: true,
    customValidation: (value, payload) => {
      if (value !== payload.workspaceId) {
        return `Field "workspaceId" must be match with payload`;
      }
      return null;
    },
  },
  {
    field: 'channelId',
    type: 'string',
    required: true,
    customValidation: (value, payload) => {
      if (value !== payload.channelId) {
        return `Field "channelId" must be match with payload`;
      }
      return null;
    },
  },
  { field: 'messageId', type: 'string', required: true },
  { field: 'userId', type: 'string', required: true },
  {
    field: 'content',
    type: 'string',
    required: true,
    customValidation: (value, payload) => {
      if (value !== payload.content) {
        return `Field "content" must be match with payload`;
      }
      return null;
    },
  },
  { field: 'messageType', type: 'number', required: true },
  { field: 'messageStatus', type: 'number', required: true },
  { field: 'attachmentType', type: 'number', required: true },
  { field: 'isThread', type: 'boolean', required: true },
  { field: 'reportCount', type: 'number', required: true },
  { field: 'isReported', type: 'boolean', required: true },
  { field: 'attachmentCount', type: 'number', required: true },
  { field: 'contentLocale', type: 'string', required: true },
  { field: 'isPinned', type: 'boolean', required: true },
  {
    field: 'createTime',
    type: 'string',
    required: true,
    customValidation: (value) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
      if (!dateRegex.test(value)) {
        return `Field "createTime" must be format ISO string`;
      }

      const createTime = new Date(value);
      if (isNaN(createTime.getTime())) {
        return `Field "createTime" is not a valid date`;
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
        return `Field "updateTime" must be format ISO string`;
      }
      const updateTime = new Date(value);
      const createTime = new Date(data.createTime);
      if (updateTime < createTime) {
        return `Field "updateTime" must not be less than "createTime"`;
      }
      return null;
    },
  },
  { field: 'ref', type: 'string', required: true },
];
