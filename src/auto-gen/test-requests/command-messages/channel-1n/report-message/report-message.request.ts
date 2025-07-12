import {
  ACTION,
  HEADER_LIST,
  PretendingTo,
  ReportCategory,
  VAR,
} from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const ReportMessageRequest = new DTOBuilder()
  .startStep('report message')
  .addAction('report message', 'report-message', ACTION.REPORT_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      messageId: VAR.messageId1,
      reportCategory: ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE,
      pretendingTo: PretendingTo.PRETENDING_TO_FRIEND,
      reportReason: 'report message',
    },
  })
  .addBeforeAll('accept invitation', 'accept-invite', ACTION.ACCEPT_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      invitationLink: VAR.invitationLink,
    },
  })
  .addBeforeAll('send message', 'send-message', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      content: 'aaaaa',
      channelId: VAR.channelId,
      ref: 'ref',
    },
  })
  .execute();
