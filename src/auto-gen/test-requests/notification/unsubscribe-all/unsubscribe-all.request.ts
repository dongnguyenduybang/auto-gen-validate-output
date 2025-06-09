import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const UnsubscribeAllRequest: RequestTestSuite = {
    action: ACTION.UNSUBSCRIBE_ALL,
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
