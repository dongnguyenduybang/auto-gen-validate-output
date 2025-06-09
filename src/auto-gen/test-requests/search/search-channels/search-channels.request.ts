import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const SearchChannelsRequest: RequestTestSuite = {
    action: ACTION.SEARCH_CHANNEL,
    body: {
        keyword: VAR.defaultChannelName
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
