import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const DeleteMessagesForEveryoneRequest = () =>
  createAIEnhancedDTO()
    .startStep('delete messages for everyone')
    .addActionAI(
      'delete message for everyone',
      'delete-message',
      ACTION.DELETE_MESSAGES_FOR_EVERYONE,
      {
        body: ACTION.DELETE_MESSAGES_FOR_EVERYONE,
      },
    )
    .addBeforeAllActionAI('send message', 'send-message', ACTION.SEND_MESSAGE, {
      body: ACTION.SEND_MESSAGE,
    })
    .execute();
