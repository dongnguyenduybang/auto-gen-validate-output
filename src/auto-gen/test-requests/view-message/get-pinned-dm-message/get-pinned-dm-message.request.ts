import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetPinnedDmMessageRequest: RequestTestSuite = {
    action: ACTION.GET_PINNED_DM_MESSAGE,
    body: {
        userId: VAR.userId1,
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.SEND_DM_MESSAGE,
                    headers: HEADER_LIST.create({ token: VAR.token1 }),
                    body: {
                        userId: VAR.userId,
                        content: 'test response send dm message',
                        ref: 'ref',
                    },
                },
                {
                    action: ACTION.PIN_UNPIN_DM_MESSAGE,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        userId: VAR.userId1,
                        messageId: VAR.messageId,
                        status: true,
                    },
                },
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
