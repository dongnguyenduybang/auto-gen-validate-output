import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const ReportMessageRequest = () =>
  createAIEnhancedDTO()
    .startStep('report message')
    .addActionAI('report message', 'report-message', ACTION.REPORT_MESSAGE, {
      body: ACTION.REPORT_MESSAGE,
    })
    .addBeforeAllActionAI('create channel', 'create-channel', ACTION.CREATE_CHANNEL, {
      body: ACTION.CREATE_CHANNEL,
    })
    .addBeforeAllActionAI('accept invitation', 'accept-invitation', ACTION.ACCEPT_INVITATION, {
      body: ACTION.ACCEPT_INVITATION,
    })
    .addBeforeAllActionAI('send message', 'send-message', ACTION.SEND_MESSAGE, {
      body: ACTION.SEND_MESSAGE,
    })
    .execute();
