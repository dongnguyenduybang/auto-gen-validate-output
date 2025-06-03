import { ACTION, HEADER_LIST, PretendingTo, ReportCategory, VAR } from "../../../../enums";
import { RequestTestSuite } from "../../../../utils/declarations";

export const ReportUserRequest: RequestTestSuite = {
  action: ACTION.REPORT_USER,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1,
    reportCategory: ReportCategory.REPORT_CATEGORY_UNSPECIFIED,
    pretendingTo: PretendingTo.PRETENDING_TO_UNSPECIFIED,
    reportReason: 'report user',
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
