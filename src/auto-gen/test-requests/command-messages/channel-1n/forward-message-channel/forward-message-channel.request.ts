import { VAR, ACTION, HEADER_LIST } from '../../../../enums';

export const ForwardMessageChannelRequest = {
  action: ACTION.FORWARD_MESSAGE_CHANNEL,
  body: {
    channelId: VAR.channelId,
    originalMessageIds: [VAR.messageId],
    workspaceId: VAR.workspaceId,
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_MESSAGE,
          body: {
            workspaceId: VAR.workspaceId,
            channelId: VAR.channelId,
            content: 'duybang12345',
            ref: 'abc',
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
        },
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },

  ],
};
