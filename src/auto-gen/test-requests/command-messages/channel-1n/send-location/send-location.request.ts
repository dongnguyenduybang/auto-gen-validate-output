import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendLocationRequest = () => createAIEnhancedDTO()
  .startStep('send location')
  .addActionAI(
    'send location',
    'send-location',
    ACTION.SEND_LOCATION,
    {
      body: ACTION.SEND_LOCATION,
    },
  )
  .execute();
