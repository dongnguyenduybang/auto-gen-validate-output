import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendDmMessageMediaRequest = () => createAIEnhancedDTO()
  .startStep('send dm message media')
  .addActionAI(
    'send dm message media',
    'send-dm-message-media',
    ACTION.SEND_DM_MESSAGE_MEDIA,
    {
      body: ACTION.SEND_DM_MESSAGE_MEDIA,
    },
  )
  .execute();
