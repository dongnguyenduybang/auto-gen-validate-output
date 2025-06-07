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
                    action: ACTION.SEND_INVITATION,
                    headers: HEADER_LIST.create({ token: VAR.token }),
                    body: {
                        invitationLink: VAR.invitationLink,
                        userIds: [VAR.userId1],
                    },
                }
            ],
            beforeEach: [],
            afterEach: [],
            afterAll: [],
        },
    ],
};
