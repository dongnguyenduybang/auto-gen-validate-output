import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { RequestTestSuite } from '../../../../utils/declarations';

export const AcceptMessageRequestRequest: RequestTestSuite = {
  action: ACTION.ACCEPT_MESSAGE_REQUEST,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1
  },
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_DM_MESSAGE,
          headers: HEADER_LIST.create({ token: VAR.token1 }),
          body: {
            userId: VAR.userId,
            content: 'test accept message request',
            ref: 'ref',
          },
        }
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
