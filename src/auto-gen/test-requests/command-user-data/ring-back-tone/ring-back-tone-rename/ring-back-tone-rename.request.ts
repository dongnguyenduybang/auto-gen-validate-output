import {
    ACTION,
    HEADER_LIST,
    VAR,
} from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const RingBackToneRenameRequest: RequestTestSuite = {
    action: ACTION.RING_BACK_TONE_RENAME,
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
        name: 'rename nhac cho  ',
        ringbackToneId: VAR.ringBackToneId
    },
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.RING_BACK_TONE_CREATE,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        name: 'nhac cho',
                        ringbackTonePath: VAR.ringBackTone
                    },
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
