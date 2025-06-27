import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const AcceptMessageRequest = new DTOBuilder()
  .startStep('accept message request')
  .addAction('accept message request', 'accept-request', ACTION.ACCEPT_MESSAGE_REQUEST, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
    },
  })
  .addBeforeAll('send dm message', 'send-message', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      userId: VAR.userId,
      content: 'test accept message request',
      ref: 'ref',
    },
  })
  .execute();
