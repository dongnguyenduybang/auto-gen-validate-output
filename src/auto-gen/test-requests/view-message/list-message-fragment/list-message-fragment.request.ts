import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const ListMessageFragmentRequest: RequestTestSuite = {
    action: ACTION.LIST_MESSAGE_FRAGMENT,
    body: {
        channelId: VAR.channelId,
        workspaceId: VAR.workspaceId,
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
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
