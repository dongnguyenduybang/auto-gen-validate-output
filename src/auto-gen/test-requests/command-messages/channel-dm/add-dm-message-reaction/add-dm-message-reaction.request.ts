import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const AddDmMessageReaction = () => createAIEnhancedDTO()
  .startStep('add dm message reaction')
  .addBeforeAllActionAI(
    'send dm message',
    'send-message',
    ACTION.SEND_DM_MESSAGE,
    {
      body: ACTION.SEND_DM_MESSAGE,
    },
  )
  .addActionAI(
    'add dm message reaction',
    'add-reaction',
    ACTION.ADD_DM_MESSAGE_REACTION,
    {
      body: ACTION.ADD_DM_MESSAGE_REACTION,
    },
  )
  .execute();
