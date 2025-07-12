import { RequestTestSuite } from '../../../utils/declarations';
import { VAR, ACTION, HEADER_LIST } from '../../../enums/index';

export const GetInvitationRequest: RequestTestSuite = {
    action: ACTION.GET_INVITATION,
    body: {
        code: VAR.code
    },
    headers: HEADER_LIST.create({ token: VAR.token }),
    options: [
        {
            beforeAll: [
                {
                    action: ACTION.CREATE_INVITATION,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        workspaceId: VAR.workspaceId,
                        channelId: VAR.channelId,
                        expiresIn: 1000,
                        maxUsers: 1,
                    },
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
