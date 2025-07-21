import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const AddMessageReactionRequest = () =>
  createAIEnhancedDTO()
    .startStep('add reaction to a message')
    .addBeforeAllActionAI('create channel', 'create-channel', ACTION.CREATE_CHANNEL, {
      body: ACTION.CREATE_CHANNEL,
    })
    .addBeforeAllActionAI('accept invitation', 'accept-invitation', ACTION.ACCEPT_INVITATION, {
      body: ACTION.ACCEPT_INVITATION,
    })
    .addBeforeAllActionAI('send message', 'send-message', ACTION.SEND_MESSAGE, {
      body: ACTION.SEND_MESSAGE,
    })
    .addActionAI('add reaction', 'add-reaction', ACTION.ADD_MESSAGE_REACTION, {
      body: ACTION.ADD_MESSAGE_REACTION,
    })
    .execute();
