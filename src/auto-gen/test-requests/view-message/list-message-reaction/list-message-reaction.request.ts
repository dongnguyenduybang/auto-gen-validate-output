import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const ListMessageReactionRequest: RequestTestSuite = {
    action: ACTION.LIST_MESSAGE_REACTION,
    body: {
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId,
        messageId: VAR.messageId,
        emoji: VAR.defaultEmoji,
        limit: 10
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
                    action: ACTION.ADD_MESSAGE_REACTION,
                    body: {
                        channelId: VAR.channelId,
                        messageId: VAR.messageId,
                        workspaceId: VAR.workspaceId,
                        emoji: VAR.defaultEmoji,
                    },
                    headers: HEADER_LIST.create({ token: VAR.token }),
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
