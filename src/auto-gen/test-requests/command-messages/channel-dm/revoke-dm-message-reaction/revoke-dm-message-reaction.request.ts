import { VAR, ACTION, HEADER_LIST } from '@enum/';

export const RevokeDmMessageReactionRequest = {
  action: ACTION.REVOKE_DM_MESSAGE_REACTION,
  body: {
    userId: VAR.userId1,
    messageId: VAR.messageId,
    emoji: '🚀',
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_DM_MESSAGE,
          body: {
            userId: VAR.userId1,
            content: 'duybang12345',
            ref: 'abc',
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
        },
        {
          action: ACTION.ADD_DM_MESSAGE_REACTION,
          body: {
            messageId: VAR.messageId,
            userId: VAR.userId1,
            emoji: '🚀',
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
