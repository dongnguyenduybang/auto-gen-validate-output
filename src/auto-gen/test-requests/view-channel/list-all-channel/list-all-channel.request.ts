import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const ListAllChannelRequest: RequestTestSuite = {
    action: ACTION.LIST_ALL_CHANNEL,
    body: {
        limit: 10
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
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
