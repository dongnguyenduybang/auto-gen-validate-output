import {
  ACTION,
  HEADER_LIST,
  VAR,
} from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const UpdateUserAvatarRequest: RequestTestSuite = {
  action: ACTION.UPDATE_USER_AVATAR,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    avatarPath: VAR.avatarPath
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
