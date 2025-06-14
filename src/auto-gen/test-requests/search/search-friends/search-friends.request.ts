import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const SearchFriendsRequest: RequestTestSuite = {
    action: ACTION.SEARCH_FRIEND,
    body: {
        keyword: VAR.prefix
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.ADD_FRIEND,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        userId: VAR.userId1
                    },
                },
                {
                    action: ACTION.ACCEPT_FRIEND_REQUEST,
                    headers: HEADER_LIST.create({ token: VAR.token1 }),
                    body: {
                        userId: VAR.userId
                    },
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
