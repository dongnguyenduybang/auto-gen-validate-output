import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const AcceptInvitationRequest: RequestTestSuite = {
  action: ACTION.ACCEPT_INVITATION,
  headers: HEADER_LIST.create({ token: VAR.token1 }),
  body: {
    invitationLink: VAR.invitationLink,
  },
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
