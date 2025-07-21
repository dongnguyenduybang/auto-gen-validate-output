import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const PinDmMessageRequest = () =>
  createAIEnhancedDTO()
    .startStep('pin dm message')
    .addBeforeAllActionAI(
      'send dm message',
      'send-dm-msg',
      ACTION.SEND_DM_MESSAGE,
      {
        body: ACTION.SEND_DM_MESSAGE,
      },
    )
    .addActionAI('pin dm message', 'pin-dm-msg', ACTION.PIN_UNPIN_DM_MESSAGE, {
      body: ACTION.PIN_UNPIN_DM_MESSAGE,
    })
    .execute();
