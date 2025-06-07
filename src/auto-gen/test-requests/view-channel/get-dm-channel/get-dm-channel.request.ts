import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetDmChannelRequest: RequestTestSuite = {
    action: ACTION.GET_DM_CHANNEL,
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
