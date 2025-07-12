import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const SubscribeChannelRequest: RequestTestSuite = {
    action: ACTION.SEARCH_CHANNEL,
    body: {
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId
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
