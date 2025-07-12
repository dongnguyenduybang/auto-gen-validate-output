import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const MarkAsReadRequest = () => createAIEnhancedDTO()
  .startStep('mark message as read')
  .addActionAI(
    'mark as read',
    'mark-as-read',
    ACTION.MARK_AS_READ,
    {
      body: ACTION.MARK_AS_READ,
    },
  )
  .addBeforeAllActionAI(
    'send message',
    'send-message',
    ACTION.SEND_MESSAGE,
    {
      body: ACTION.SEND_MESSAGE,
    },
  )
  .execute();
