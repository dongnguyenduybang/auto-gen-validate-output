import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetPinnedMessageRequest: RequestTestSuite = {
    action: ACTION.GET_PINNED_MESSAGE,
    body: {
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId,
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.ACCEPT_INVITATION,
                    headers: HEADER_LIST.create({ token: VAR.token1 }),
                    body: {
                        invitationLink: VAR.invitationLink,
                    },
                },
                {
                    action: ACTION.SEND_MESSAGE,
                    headers: HEADER_LIST.create({ token: VAR.token1 }),
                    body: {
                        channelId: VAR.channelId,
                        workspaceId: VAR.workspaceId,
                        content: 'test DTO send message',
                        ref: 'ref',
                    },
                },
                {
                    action: ACTION.PIN_UNPIN_MESSAGE,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        workspaceId: VAR.workspaceId,
                        channelId: VAR.channelId,
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
