import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { RequestTestSuite } from '../../../../utils/declarations';

export const UnfriendRequest: RequestTestSuite = {
  action: ACTION.UNFRIEND,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1
  },
  options: [
    {
      beforeAll: [
        {
          action: ACTION.ADD_FRIEND,
          headers: HEADER_LIST.create({ token: VAR.token1 }),
          body: {
            userId: VAR.userId
          },
        },
        {
          action: ACTION.ACCEPT_FRIEND_REQUEST,
          headers: HEADER_LIST.create({ token: VAR.token }),
          body: {
            userId: VAR.userId1
          },
        }
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
