import { ACTION, HEADER_LIST, VAR } from "../../../../enums/index";
import { RequestTestSuite } from "../../../../utils/declarations";

export const CreateInvitationRequest: RequestTestSuite = {
  action: ACTION.CREATE_CHANNEL,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    workspaceId: VAR.workspaceId,
    channelId: VAR.channelId,
    expiresIn: 1000,
    maxUsers: 1
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
