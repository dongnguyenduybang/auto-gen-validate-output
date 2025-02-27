import { ValidationRule } from '../../helps/structures/responses';

// Quy tắc validation cho message
export const validationRulesMessage: ValidationRule[] = [
  { field: 'workspaceId', type: 'string', required: true },
  { field: 'channelId', type: 'string', required: true },
  { field: 'messageId', type: 'string', required: true },
  { field: 'userId', type: 'string', required: true },
  { field: 'content', type: 'string', required: true },
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

export const validationRulesIncludes: Record<string, ValidationRule[]> = {
  users: [
    { field: 'userId', type: 'string', required: true },
    { field: 'username', type: 'string', required: true },
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
    { field: 'profile.avatar', type: 'string', required: true },
    { field: 'profile.displayName', type: 'string', required: true },
    { field: 'profile.originalAvatar', type: 'string', required: true },
    { field: 'profile.avatarType', type: 'number', required: true },
    { field: 'profile.userBadgeType', type: 'number', required: true },
    { field: 'userType', type: 'number', required: true },
    { field: 'presenceData.lastUpdateTime', type: 'string', required: true },
    {
      field: 'presenceData.lastUpdateInSeconds',
      type: 'number',
      required: true,
    },
    { field: 'presenceData.presenceState', type: 'number', required: true },
  ],
  channels: [
    { field: 'workspaceId', type: 'string', required: true },
    { field: 'channelId', type: 'string', required: true },
    { field: 'userId', type: 'string', required: true },
    { field: 'name', type: 'string', required: true },
    { field: 'isPrivate', type: 'boolean', required: true },
    { field: 'type', type: 'number', required: true },
    { field: 'invitationLink', type: 'string', required: true },
    { field: 'totalMembers', type: 'number', required: true },
    { field: 'createTime', type: 'string', required: true },
    { field: 'updateTime', type: 'string', required: true },
  ],
  members: [
    { field: 'workspaceId', type: 'string', required: true },
    { field: 'channelId', type: 'string', required: true },
    { field: 'userId', type: 'string', required: true },
    { field: 'nickname', type: 'string', required: false },
    { field: 'role', type: 'string', required: true },
    { field: 'roles', type: 'array', required: true },
    { field: 'createTime', type: 'string', required: true },
    { field: 'updateTime', type: 'string', required: true },
  ],
  channelMetadata: [
    { field: 'unreadCount', type: 'number', required: true },
    { field: 'lastMessageId', type: 'string', required: true },
    { field: 'notificationStatus', type: 'boolean', required: true },
    { field: 'mediaPermissionSetting', type: 'number', required: true },
    { field: 'workspaceId', type: 'string', required: true },
    { field: 'channelId', type: 'string', required: true },
  ],
};
