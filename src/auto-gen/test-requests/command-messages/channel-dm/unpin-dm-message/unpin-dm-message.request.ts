import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const UnpinDmMessageRequest = () => createAIEnhancedDTO()
  .startStep('unpin dm message')
  .addBeforeAllActionAI(
    'send dm message',
    'send-dm-message',
    ACTION.SEND_DM_MESSAGE,
    {
      body: ACTION.SEND_DM_MESSAGE,
    }
  )
  .addBeforeAllActionAI(
    'pin dm message',
    'pin-dm-message',
    ACTION.PIN_UNPIN_DM_MESSAGE,
    {
      body: ACTION.PIN_UNPIN_DM_MESSAGE,
    }
  )
  .addActionAI(
    'unpin dm message',
    'unpin-dm-message',
    ACTION.PIN_UNPIN_DM_MESSAGE,
    {
      body: ACTION.PIN_UNPIN_DM_MESSAGE,
    }
  )
  .execute();
