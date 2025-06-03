import { ACTION, ExpireAfterTimeEnum, HEADER_LIST, VAR } from "../../../../../enums";
import { RequestTestSuite } from "../../../../../utils/declarations";

export const AddUserStatusRequest: RequestTestSuite = {
  action: ACTION.ADD_USER_STATUS,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    content: 'Hi hi',
    status: '🚀',
    expireAfterTime: ExpireAfterTimeEnum.USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR
  },
  options: [
    {
      beforeAll: [],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },
  ],
};
