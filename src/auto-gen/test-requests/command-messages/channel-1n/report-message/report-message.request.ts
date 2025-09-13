import { ACTION, HEADER_LIST, PretendingTo, ReportCategory, VAR } from "@enum/";
import { RequestTestSuite } from "@utils/declarations";

export const ReportMessageRequest: RequestTestSuite = {
  action: ACTION.REPORT_MESSAGE,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    messageId: VAR.messageId1,
    reportCategory: ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE,
    pretendingTo: PretendingTo.PRETENDING_TO_FRIEND,
    reportReason: 'report message',
  },
  options: [
    {
      beforeAll: [
        {
          action: ACTION.ACCEPT_INVITATION,
          headers: HEADER_LIST.create({token: VAR.token1}),
          body: {
            invitationLink: VAR.invitationLink
          }
        },
                {
          action: ACTION.SEND_MESSAGE,
          headers: HEADER_LIST.create({token: VAR.token}),
          body: {
            workspaceId: VAR.workspaceId,
            content: 'aaaaa',
            channelId: VAR.channelId,
            ref: 'ref'
          }
        }
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },
  ],
};
