/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
type ApiResultMapping = {
  [key: string]: string | ((apiResult: any, body: any) => any);
};

export const API_RESULT_MAPPINGS: { [functionName: string]: ApiResultMapping } = {
  mockUser: {
    users: (apiResult, body) => apiResult.data.map((user: any, index: number) => ({
      token: user.token,
      userId: user.userId,
      username: body.prefix,
    }))
  },
  createChannel: {
    isChannelId: 'data.channel.channelId',
    messageId: 'includes.messages[0].messageId',
    isContent: 'includes.messages[0].content',
    role: 'includes.members[0].role',
    isOwner: 'includes.members[0].userId',

  },
  getChannel: {
    countMember: 'includes.members.length',
    countMessage: 'includes.messages.length',
    isContent: 'includes.messages[0].content',
    isLastMessage: 'includes.messages[0].messageId',
    isChannelId: 'data.channel.channelId',
    isOwner: 'data.channel.userId',
    invitationLink: 'data.channel.invitationLink',
  },
  getListMessage: {
    isLastMessage: 'data[0].message.messageId',
    isLastContent: 'data[0].message.content',
    isSender: 'data[0].message.userId',
    countListMessage: 'data.length',
  },
  sendMessage: {
    messageId: 'data.message.messageId',
    content: 'data.message.content',
    channelId: 'data.message.channelId',
    senderId: 'data.message.userId'
  },
  acceptChannel: {
    countMember: 'data.channel.totalMembers',
    countMessage: 'includes.messages.length',
    isLastMessage: 'data.channelMetadata.lastMessageId',
    isChannelId: 'data.channel.channelId',
    isSender: 'data.channel.userId',
    isContent: 'includes.messages[0].content'
  }
};
