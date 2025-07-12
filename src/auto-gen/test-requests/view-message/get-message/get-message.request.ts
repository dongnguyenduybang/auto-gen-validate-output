import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetMessageRequest: RequestTestSuite = {
    action: ACTION.GET_MESSAGE,
    body: {
        messageId: VAR.messageId,
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.SEND_MESSAGE,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        channelId: VAR.channelId,
                        workspaceId: VAR.workspaceId,
                        content: 'test DTO send message',
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
