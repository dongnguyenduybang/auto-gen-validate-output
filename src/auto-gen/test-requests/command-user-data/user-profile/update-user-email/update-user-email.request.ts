import {
  ACTION,
  HEADER_LIST,
  VAR,
} from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const UpdateUserEmailRequest: RequestTestSuite = {
  action: ACTION.UPDATE_USER_EMAIL,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    email: VAR.email
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
