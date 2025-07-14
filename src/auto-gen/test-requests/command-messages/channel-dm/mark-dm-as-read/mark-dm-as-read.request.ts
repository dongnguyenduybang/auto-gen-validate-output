import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const MarkDmAsReadRequest = () => createAIEnhancedDTO()
  .startStep('mark dm as read')
  .addBeforeAllActionAI(
    'send dm message',
    'send-dm-msg',
    ACTION.SEND_DM_MESSAGE,
    {
      body: ACTION.SEND_DM_MESSAGE,
    },
  )
  .addActionAI(
    'mark dm as read',
    'mark-dm-read',
    ACTION.MARK_DM_AS_READ,
    {
      body: ACTION.MARK_DM_AS_READ,
    },
  )
  .execute();
