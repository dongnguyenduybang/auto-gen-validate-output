import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const ReportDmMessageRequest = () => createAIEnhancedDTO()
  .startStep('report dm message')
  .addBeforeAllActionAI(
    'send dm message',
    'send-dm-msg',
    ACTION.SEND_DM_MESSAGE,
    {
      body: ACTION.SEND_DM_MESSAGE,
    },
  )
  .addActionAI(
    'report dm message',
    'report-dm-msg',
    ACTION.REPORT_DM_MESSAGE,
    {
      body: ACTION.REPORT_DM_MESSAGE,
    },
  )
  .execute();
