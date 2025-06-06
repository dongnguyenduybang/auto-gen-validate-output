import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const ForwardDmMessageChannelRequest = {
  action: ACTION.FORWARD_DM_MESSAGE_CHANNEL,
  body: {
    userId: VAR.userId1,
    originalMessageIds: [VAR.messageId],
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
      afterAll: [],
    },
  ],
};
