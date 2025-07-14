import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendDmLocationRequest = () => createAIEnhancedDTO()
  .startStep('send dm location')
  .addActionAI(
    'send dm location',
    'send-dm-location',
    ACTION.SEND_DM_LOCATION,
    {
      body: ACTION.SEND_DM_LOCATION,
    },
  )
  .execute();
