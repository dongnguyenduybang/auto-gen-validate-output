import {
    ACTION,
    HEADER_LIST,
    VAR,
} from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const RingBackToneCreateRequest: RequestTestSuite = {
    action: ACTION.RING_BACK_TONE_CREATE,
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
        name: 'nhac cho',
        ringbackTonePath: VAR.ringBackTone
    },
    options: [
        {
            beforeAll: [],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
