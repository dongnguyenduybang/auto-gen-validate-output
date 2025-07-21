import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const UnpinMessageRequest = () =>
  createAIEnhancedDTO()
    .startStep('unpin message')
    .addActionAI('unpin message', 'unpin-message', ACTION.PIN_UNPIN_MESSAGE, {
      body: ACTION.PIN_UNPIN_MESSAGE,
    })
    .addBeforeAllActionAI('send message', 'send-message', ACTION.SEND_MESSAGE, {
      body: ACTION.SEND_MESSAGE,
    })
    .addBeforeAllActionAI(
      'pin message first',
      'pin-message',
      ACTION.PIN_UNPIN_MESSAGE,
      {
        body: ACTION.PIN_UNPIN_MESSAGE,
      },
    )
    .execute();
