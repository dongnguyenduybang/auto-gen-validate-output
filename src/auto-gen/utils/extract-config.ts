
export type ExtractConfig = {
  [key: string]: {
    path: string[];
    fields: string[];
  };
};

const mockUserConfig: ExtractConfig = {
  user: {
    path: ['data'],
    fields: ['userId', 'token'],
  },
};

const createChannelConfig: ExtractConfig = {
  channel: {
    path: ['data', 'channel'],
    fields: ['channelId', 'workspaceId', 'name', 'invitationLink', 'totalMembers'],
  },
  users: {
    path: ['includes', 'users'],
    fields: ['userId', 'username']
  }
};

const getChannelConfig: ExtractConfig = {};

const acceptInvitationConfig: ExtractConfig = {
  channel: {
    path: ['data', 'channel'],
    fields: ['totalMembers'],
  },
};

const sendMessageConfig: ExtractConfig = {
  message: {
    path: ['data', 'message'],
    fields: ['messageId', 'content'],
  },
};

const updateMessageConfig: ExtractConfig = {
  message: {
    path: ['data', 'message'],
    fields: ['messageId', 'content'],
  },
};

const sendDmMessageConfig: ExtractConfig = {
  message: {
    path: ['data', 'message'],
    fields: ['messageId', 'content'],
  },
};

const acceptMessageConfig: ExtractConfig = {
  channel: {
    path: ['data', 'channel'],
    fields: ['name'],
  },
};

const ejectMessageConfig: ExtractConfig = {
  channel: {
    path: ['data', 'channel'],
    fields: ['name'],
  },
};

// Ánh xạ action tới cấu hình
export const configMap: Record<string, ExtractConfig> = {
  mockUser: mockUserConfig,
  createChannel: createChannelConfig,
  getChannel: getChannelConfig,
  acceptInvitation: acceptInvitationConfig,
  sendMessage: sendMessageConfig,
  updateMessage: updateMessageConfig,
  sendDmMessage: sendDmMessageConfig,
  acceptMessage: acceptMessageConfig,
  ejectMessage: ejectMessageConfig,
};