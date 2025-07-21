import { createAIEnhancedDTO } from '../../../../utils/swagger-execute';
import { ACTION } from '../../../../enums';

export const SendDmMessageStickerRequest = () =>
  createAIEnhancedDTO()
    .startStep('send dm message sticker')
    .addActionAI(
      'send dm message sticker',
      'send-dm-message-sticker',
      ACTION.SEND_DM_MESSAGE_STICKER,
      {
        body: ACTION.SEND_DM_MESSAGE_STICKER,
      },
    )
    .execute();
