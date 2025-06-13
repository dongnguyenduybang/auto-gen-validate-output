import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const UnpinDmMessageRequest = {
  action: ACTION.PIN_UNPIN_DM_MESSAGE,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1,
    messageId: VAR.messageId,
    status: false,
  },
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
          action: ACTION.PIN_UNPIN_DM_MESSAGE,
          headers: HEADER_LIST.create({ token: VAR.token }),
          body: {
            userId: VAR.userId1,
            messageId: VAR.messageId,
            status: true,
          },
        }
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
