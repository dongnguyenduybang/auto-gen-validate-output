import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendMessageRequest = () => createAIEnhancedDTO()
  .startStep('send message')
  .addActionAI(
    'send message',
    'send-message',
    ACTION.SEND_MESSAGE,
    {
      body: ACTION.SEND_MESSAGE,
    },
  )
  .execute();
