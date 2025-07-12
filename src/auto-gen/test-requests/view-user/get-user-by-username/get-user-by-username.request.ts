import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetUserByUsernameRequest: RequestTestSuite = {
    action: ACTION.GET_USER_BY_USERNAME,
    body: {
        username: VAR.username1,
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
