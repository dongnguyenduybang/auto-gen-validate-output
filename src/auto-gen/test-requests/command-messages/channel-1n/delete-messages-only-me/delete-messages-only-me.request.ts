import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const DeleteMessagesOnlyMeRequest = () =>
  createAIEnhancedDTO()
    .startStep('delete messages only for me')
    .addActionAI(
      'delete message only me',
      'delete-message-only-me',
      ACTION.DELETE_MESSAGES_ONLY_ME,
      {
        body: ACTION.DELETE_MESSAGES_ONLY_ME,
      },
    )
    .addBeforeAllActionAI('send message', 'send-message', ACTION.SEND_MESSAGE, {
      body: ACTION.SEND_MESSAGE,
    })
    .execute();
