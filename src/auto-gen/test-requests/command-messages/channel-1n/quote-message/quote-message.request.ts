import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const QuoteMessageRequest = () => createAIEnhancedDTO()
  .startStep('quote message')
  .addActionAI(
    'quote a message',
    'quote-message',
    ACTION.QUOTE_MESSAGE,
    {
      body: ACTION.QUOTE_MESSAGE,
    },
  )
  .addBeforeAllActionAI(
    'send base message',
    'send-message',
    ACTION.SEND_MESSAGE,
    {
      body: ACTION.SEND_MESSAGE,
    },
  )
  .execute();
