import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const SubscribeAllRequest: RequestTestSuite = {
    action: ACTION.SUBSCRIBE_ALL,
    body: {
        appId: 'ios_02b9722363a884da1353f2708ea7df18',
        deviceToken: 'token'
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
