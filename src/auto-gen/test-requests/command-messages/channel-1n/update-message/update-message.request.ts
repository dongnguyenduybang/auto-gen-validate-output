import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { VAR, ACTION } from '../../../../enums/index';

export const UpdateMessageRequest = () => createAIEnhancedDTO()
  .startStep('update message')
  .addActionAI(
    'update message',
    'update-msg',
    ACTION.UPDATE_MESSAGE,
    {
      body: ACTION.UPDATE_MESSAGE,
    },
  )
  .addBeforeAllActionAI(
    'send message',
    'send-msg',
    ACTION.SEND_MESSAGE,
    {
      body: ACTION.SEND_MESSAGE,
    },
  )
  .execute();
