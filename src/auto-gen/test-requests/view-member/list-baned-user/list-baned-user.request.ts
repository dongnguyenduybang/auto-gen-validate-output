import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const ListBanedUserRequest: RequestTestSuite = {
    action: ACTION.LIST_BANNED_USER,
    body: {
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId,
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
                    action: ACTION.BAN_FROM_CHANNEL,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        channelId: VAR.channelId,
                        workspaceId: VAR.workspaceId,
                        userId: VAR.userId1,
                    },
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
