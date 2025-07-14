import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const DeleteDmMessagesForEveryoneRequest = () => createAIEnhancedDTO()
  .startStep('delete DM messages for everyone')
  .addBeforeAllActionAI(
    'send dm message',
    'send-dm',
    ACTION.SEND_DM_MESSAGE,
    {
      body: ACTION.SEND_DM_MESSAGE,
    },
  )
  .addActionAI(
    'delete dm messages',
    'delete-dm-msgs',
    ACTION.DELETE_DM_MESSAGES_FOR_EVERYONE,
    {
      body: ACTION.DELETE_DM_MESSAGES_FOR_EVERYONE,
    },
  )
  .execute();
