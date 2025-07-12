import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UnpinDmMessageRequest = new DTOBuilder()
  .startStep('unpin dm message')
  .addAction(
    'send dm message',
    'send-dm-message',
    ACTION.SEND_DM_MESSAGE,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        content: 'duybang12345',
        ref: 'abc',
      },
    }
  )
  .addAction(
    'pin dm message',
    'pin-dm-message',
    ACTION.PIN_UNPIN_DM_MESSAGE,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        messageId: VAR.messageId,
        status: true,
      },
    }
  )
  .addAction(
    'unpin dm message',
    'unpin-dm-message',
    ACTION.PIN_UNPIN_DM_MESSAGE,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        messageId: VAR.messageId,
        status: false,
      },
    }
  )
  .execute();
