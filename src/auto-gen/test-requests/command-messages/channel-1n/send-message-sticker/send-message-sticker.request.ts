import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SendMessageStickerRequest = new DTOBuilder()
  .startStep('send message sticker')
  .addAction('send message sticker', 'send-message-sticker', ACTION.SEND_MESSAGE_STICKER, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
      stickerId: VAR.stickerId,
      ref: 'ref',
    },
  })
  .execute();
