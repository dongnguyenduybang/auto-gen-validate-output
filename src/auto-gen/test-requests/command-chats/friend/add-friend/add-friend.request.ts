import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { RequestTestSuite } from '../../../../utils/declarations';

export const AddFriendRequest: RequestTestSuite = {
  action: ACTION.ADD_FRIEND,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1
  },
  options: [
    {
      beforeAll: [
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
