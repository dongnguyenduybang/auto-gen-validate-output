import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const PinDmMessageRequest = new DTOBuilder()
  .startStep('pin dm message')
  .addAction('pin dm message', 'pin-dm-msg', ACTION.PIN_UNPIN_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      messageId: VAR.messageId,
      status: true,
    },
  })
  .addBeforeAll('send dm message', 'send-dm-msg', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .execute();
