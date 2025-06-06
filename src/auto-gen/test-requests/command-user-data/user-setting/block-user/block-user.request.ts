import {
  ACTION,
  HEADER_LIST,
  VAR,
} from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const BlockUserRequest: RequestTestSuite = {
  action: ACTION.BLOCK_USER,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    targetUserId: VAR.userId1
  },
  options: [
    {
      beforeAll: [],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
