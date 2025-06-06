import {
  ACTION,
  HEADER_LIST,
  PretendingTo,
  ReportCategory,
  VAR,
} from '../../../../enums/index';
import { RequestTestSuite } from '../../../../utils/declarations';

export const ReportDmMessageRequest: RequestTestSuite = {
  action: ACTION.REPORT_DM_MESSAGE,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1,
    messageId: VAR.messageId,
    reportCategory: ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE,
    pretendingTo: PretendingTo.PRETENDING_TO_FRIEND,
    reportReason: 'report message',
  },
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_DM_MESSAGE,
          headers: HEADER_LIST.create({ token: VAR.token1 }),
          body: {
            userId: VAR.userId,
            content: 'aaaaa',
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
