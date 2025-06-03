import { VAR, ACTION, HEADER_LIST } from '../../../../enums';

export const UpdateDmMessageRequest = {
  action: ACTION.UPDATE_DM_MESSAGE,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1,
    messageId: VAR.messageId,
    content: 'test update send dm message',
    ref: 'ref',
  },
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_DM_MESSAGE,
          headers: HEADER_LIST.create({ token: VAR.token }),
          body: {
            content: 'aaaaa',
            userId: VAR.userId1,
            ref: 'ref'
          }
        }
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },
  ],
};
