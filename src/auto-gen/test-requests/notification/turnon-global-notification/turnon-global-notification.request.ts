import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const TurnonGlobalNotificationRequest: RequestTestSuite = {
    action: ACTION.TURNON_GLOBAL_NOTIFICATION,
    body: {},
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
