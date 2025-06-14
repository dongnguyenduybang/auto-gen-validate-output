import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const ListDmMessageReactionRequest: RequestTestSuite = {
    action: ACTION.LIST_DM_MESSAGE_REACTION,
    body: {
        userId: VAR.userId1,
        messageId: VAR.messageId,
        emoji: VAR.defaultEmoji
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
                },
                {
                    action: ACTION.ADD_DM_MESSAGE_REACTION,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        userId: VAR.userId1,
                        messageId: VAR.messageId,
                        emoji: VAR.defaultEmoji,
                    },
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
