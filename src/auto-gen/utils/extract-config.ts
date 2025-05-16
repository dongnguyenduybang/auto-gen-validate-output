import { ExtractConfig } from "./declarations";

const mockUserConfig: ExtractConfig = {
  user: {
    path: ['data'],
    fields: ['userId', 'token'],
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
  users: {
    path: ['includes', 'users'],
    fields: ['username'],
  },
};

const getChannelConfig: ExtractConfig = {};

const acceptInvitationConfig: ExtractConfig = {
  channel: {
    path: ['data', 'channel'],
    fields: ['totalMembers'],
  },
  messages: {
    path: ['includes', 'messages' ],
    fields: ['content', 'messageType', 'messageId']
  }
};

const sendMessageConfig: ExtractConfig = {
  message: {
    path: ['data', 'message'],
    fields: ['messageId', 'content', 'messageType'],
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

const openConnectionConfig: ExtractConfig = {
  connectParams: {
    path: ['connectParams'],
    fields: ['url']
  }
}

const wsOpenConfigRecipient: ExtractConfig = {
  wsRecipient: {
    path: [],
    fields: ['id', 'type', 'data'],
  },
};
const wsOpenConfigActor: ExtractConfig = {
  wsActor: {
    path: [],
    fields: ['id', 'type', 'data'],
  },
};

const openConnectionResumeConfig: ExtractConfig = {

}
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

  openConnection: openConnectionConfig,
  wsActor: wsOpenConfigActor,
  wsRecipient: wsOpenConfigRecipient,
  openConnectionResume: openConnectionResumeConfig
};

