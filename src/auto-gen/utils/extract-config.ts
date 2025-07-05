import { ExtractConfig } from './declarations';

const mockUserConfig: ExtractConfig = {
  user: {
    path: ['data'],
    fields: ['userId', 'token', 'username'],
  },
};

const createChannelConfig: ExtractConfig = {
  channel: {
    path: ['data', 'channel'],
    fields: [
      'channelId',
      'workspaceId',
      'name',
      'invitationLink',
      'totalMembers',
    ],
  },
  // users: {
  //   path: ['includes', 'users'],
  //   fields: ['username'],
  // },
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
  data: {
    path: ['data'],
    fields: ['code'],
  },
};

const ringbackToneCreateConfig: ExtractConfig = {
  data: {
    path: ['data'],
    fields: ['ringbackToneId']
  }
}
const createInvitationConfig: ExtractConfig = {
  data: {
    path: ['data'],
    fields: ['code']
  }
};
const sendInvitationConfig: ExtractConfig = {
  data: {
    path: ['data'],
    fields: ['code']
  }
}
// Ánh xạ action tới cấu hình
export const configMap: Record<string, ExtractConfig> = {
  V3MockUsersRequest: mockUserConfig,
  V3CreateChannelRequest: createChannelConfig,
  getChannel: getChannelConfig,
  acceptInvitation: acceptInvitationConfig,
  V3SendMessageRequest: sendMessageConfig,
  updateMessage: updateMessageConfig,
  V3SendDMMessageRequest: sendDmMessageConfig,
  acceptMessage: acceptMessageConfig,
  V3RejectMessageRequestRequest: ejectMessageConfig,
  createInvitation: createInvitationConfig,
  ringbackToneCreate: ringbackToneCreateConfig,
  sendInvitation: sendInvitationConfig,
};
