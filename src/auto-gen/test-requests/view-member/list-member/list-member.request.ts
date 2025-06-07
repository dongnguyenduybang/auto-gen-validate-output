import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const ListMemberRequest: RequestTestSuite = {
    action: ACTION.LIST_MEMBERS,
    body: {
        userId: VAR.userId1,
        workspaceId: VAR.workspaceId,
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
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
