import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SendDmMessageStickerRequest = new DTOBuilder()
  .startStep('send dm message sticker')
  .addAction(
    'send dm message sticker',
    'send-dm-message-sticker',
    ACTION.SEND_DM_MESSAGE_STICKER,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        stickerId: VAR.stickerId,
        ref: 'ref',
      },
    }
  )
  .execute();
