import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const AddMessageReactionRequest = {
  action: ACTION.ADD_MESSAGE_REACTION,
  body: {
    channelId: VAR.channelId,
    messageId: VAR.messageId,
    workspaceId: VAR.workspaceId,
    emoji: '🚀',
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_MESSAGE,
          body: {
            workspaceId: '0',
            channelId: VAR.channelId,
            content: 'duybang12345',
            ref: 'abc',
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
        },
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [
      ]
    },

  ],
};
