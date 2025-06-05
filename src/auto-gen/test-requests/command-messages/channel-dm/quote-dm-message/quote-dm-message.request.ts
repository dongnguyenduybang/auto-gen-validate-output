import { RequestTestSuite } from '../../../../utils/declarations';
import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';

export const QuoteDmMessageRequest: RequestTestSuite = {
  action: ACTION.QUOTE_DM_MESSAGE,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1,
    messageId: VAR.messageId,
    content: 'test DTO quote message',
    ref: 'ref',
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

      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [

      ]
    },

  ],
};
