import { ACTION, HEADER_LIST, VAR } from "../../enums";
import { RequestTestSuite } from "../../utils/declarations";

export const SendInvitationRequest: RequestTestSuite = {
  action: ACTION.SEND_INVITATION,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    invitationLink: VAR.invitationLink,
    userIds: [VAR.userId1]
  },
  options: [
    {   
      beforeAll: [],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },
  ],
};
