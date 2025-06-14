import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetDmMessageRequest: RequestTestSuite = {
    action: ACTION.GET_DM_MESSAGE,
    body: {
        messageId: VAR.messageId,
        userId: VAR.userId1,
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.SEND_DM_MESSAGE,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        userId: VAR.userId1,
                        content: 'test response send dm message',
                        ref: 'ref',
                    },
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
