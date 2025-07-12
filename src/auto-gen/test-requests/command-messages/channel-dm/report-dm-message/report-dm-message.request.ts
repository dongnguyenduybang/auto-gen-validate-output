import {
  ACTION,
  HEADER_LIST,
  PretendingTo,
  ReportCategory,
  VAR,
} from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const ReportDmMessageRequest = new DTOBuilder()
  .startStep('report dm message')
  .addAction('report dm message', 'report-dm-msg', ACTION.REPORT_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      messageId: VAR.messageId,
      reportCategory: ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE,
      pretendingTo: PretendingTo.PRETENDING_TO_FRIEND,
      reportReason: 'report message',
    },
  })
  .addBeforeAll('send dm message', 'send-dm-msg', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      userId: VAR.userId,
      content: 'aaaaa',
      ref: 'ref',
    },
  })
  .execute();
