import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const QuoteDmMessageRequest = () =>
  createAIEnhancedDTO()
    .startStep('quote dm message')
    .addBeforeAllActionAI(
      'send dm message',
      'send-dm-msg',
      ACTION.SEND_DM_MESSAGE,
      {
        body: ACTION.SEND_DM_MESSAGE,
      },
    )
    .addActionAI('quote dm message', 'quote-dm-msg', ACTION.QUOTE_DM_MESSAGE, {
      body: ACTION.QUOTE_DM_MESSAGE,
    })
    .execute();
