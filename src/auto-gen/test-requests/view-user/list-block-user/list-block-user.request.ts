import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const ListBlockUserRequest: RequestTestSuite = {
    action: ACTION.LIST_BLOCK_USER,
    body: {
        limit: 10
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.BLOCK_USER,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        targetUserId: VAR.userId1
                    },
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
