import {
  ACTION,
  ExpireAfterTimeEnum,
  HEADER_LIST,
  VAR,
} from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const UpdateUserDisplayNameRequest: RequestTestSuite = {
  action: ACTION.UPDATE_USER_DISPLAY_NAME,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    displayName: "ABCDEF"
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
