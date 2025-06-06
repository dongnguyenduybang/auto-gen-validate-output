import {
  ACTION,
  HEADER_LIST,
  VAR,
} from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const UnblockUserRequest: RequestTestSuite = {
  action: ACTION.UNBLOCK_USER,
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
