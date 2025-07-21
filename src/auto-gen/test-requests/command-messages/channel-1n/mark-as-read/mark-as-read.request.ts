import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const MarkAsReadRequest = () =>
  createAIEnhancedDTO()
    .startStep('mark message as read')
    .addBeforeAllActionAI('create channel', 'create-channel', ACTION.CREATE_CHANNEL, {
      body: ACTION.CREATE_CHANNEL,
    })
    .addBeforeAllActionAI('accept invitation', 'accept-invitation', ACTION.ACCEPT_INVITATION, {
      body: ACTION.ACCEPT_INVITATION,
    })
    .addBeforeAllActionAI('send message', 'send-message', ACTION.SEND_MESSAGE, {
      body: ACTION.SEND_MESSAGE,
    })
    .addActionAI('mark as read', 'mark-as-read', ACTION.MARK_AS_READ, {
      body: ACTION.MARK_AS_READ,
    })

    .execute();
