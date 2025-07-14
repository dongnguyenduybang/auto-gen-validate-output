import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendDmMessageRequest = () => createAIEnhancedDTO()
  .startStep('send dm message')
  .addActionAI(
    'send dm message',
    'send-dm-msg',
    ACTION.SEND_DM_MESSAGE,
    {
      body: ACTION.SEND_DM_MESSAGE,
    },
  )
  .execute();
