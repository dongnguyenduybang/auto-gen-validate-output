import { createAIEnhancedDTO } from '../../../../../utils/swagger-execute';
import { VAR, ACTION, HEADER_LIST } from '../../../../../enums';

export const AddMessageReactionRequest = () => createAIEnhancedDTO()
  .startStep('add reaction to a message')
  .addActionAI(
    'add reaction',
    'add-reaction',
    ACTION.ADD_MESSAGE_REACTION,
    {
      body: ACTION.ADD_MESSAGE_REACTION
    },
  )
  .addBeforeAllActionAI(
    'send message',
    'send-message',
    ACTION.SEND_MESSAGE,
    {
    
      body:ACTION.SEND_MESSAGE,
    },
  )
  .execute();
