import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const DeleteDmMessagesOnlyMeRequest = () => createAIEnhancedDTO()
  .startStep('delete DM messages only me')
  .addBeforeAllActionAI(
    'send dm message',
    'send-dm',
    ACTION.SEND_DM_MESSAGE,
    {
      body: ACTION.SEND_DM_MESSAGE,
    },
  )
  .addActionAI(
    'delete dm messages only me',
    'delete-dm-msgs-only-me',
    ACTION.DELETE_DM_MESSAGES_ONLY_ME,
    {
      body: ACTION.DELETE_DM_MESSAGES_ONLY_ME,
    },
  )
  .execute();
