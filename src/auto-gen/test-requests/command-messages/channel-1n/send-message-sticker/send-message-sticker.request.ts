import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendMessageStickerRequest = () =>
  createAIEnhancedDTO()
    .startStep('send message sticker')
    .addActionAI(
      'send message sticker',
      'send-message-sticker',
      ACTION.SEND_MESSAGE_STICKER,
      {
        body: ACTION.SEND_MESSAGE_STICKER,
      },
    )
    .addBeforeAllActionAI('create channel', 'create-channel', ACTION.CREATE_CHANNEL, {
      body: ACTION.CREATE_CHANNEL,
    })
    .addBeforeAllActionAI('accept invitation', 'accept-invitation', ACTION.ACCEPT_INVITATION, {
      body: ACTION.ACCEPT_INVITATION,
    })
    .execute();
