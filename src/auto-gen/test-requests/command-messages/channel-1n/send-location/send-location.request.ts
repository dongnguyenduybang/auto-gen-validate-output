import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendLocationRequest = () =>
  createAIEnhancedDTO()
    .startStep('send location')
    .addActionAI('send location', 'send-location', ACTION.SEND_LOCATION, {
      body: ACTION.SEND_LOCATION,
    })
    .addBeforeAllActionAI('create channel', 'create-channel', ACTION.CREATE_CHANNEL, {
      body: ACTION.CREATE_CHANNEL,
    })
    .addBeforeAllActionAI('accept invitation', 'accept-invitation', ACTION.ACCEPT_INVITATION, {
      body: ACTION.ACCEPT_INVITATION,
    })
    .execute();
