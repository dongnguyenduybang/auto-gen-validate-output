import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums/index';

export const UpdateMessageRequest = () =>
  createAIEnhancedDTO()
    .startStep('update message')
    .addActionAI('update message', 'update-msg', ACTION.UPDATE_MESSAGE, {
      body: ACTION.UPDATE_MESSAGE,
    })
    .addBeforeAllActionAI('create channel', 'create-channel', ACTION.CREATE_CHANNEL, {
      body: ACTION.CREATE_CHANNEL,
    })
    .addBeforeAllActionAI('accept invitation', 'accept-invitation', ACTION.ACCEPT_INVITATION, {
      body: ACTION.ACCEPT_INVITATION,
    })
    .addBeforeAllActionAI('send message', 'send-msg', ACTION.SEND_MESSAGE, {
      body: ACTION.SEND_MESSAGE,
    })
    .execute();
