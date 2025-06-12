import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const TurnoffGlobalNotificationRequest: RequestTestSuite = {
    action: ACTION.TURNOFF_GLOBAL_NOTIFICATION,
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
