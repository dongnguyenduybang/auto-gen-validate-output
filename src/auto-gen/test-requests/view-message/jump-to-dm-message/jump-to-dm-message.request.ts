import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const JumpToDmMessageRequest: RequestTestSuite = {
    action: ACTION.JUMP_TO_DM_MESSAGE,
    body: {
        userId: VAR.userId,
        messageId: VAR.messageId,
        limit: 10
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
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
