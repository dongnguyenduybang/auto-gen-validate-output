import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const RejectMessageRequestRequest = new DTOBuilder()
  .startStep('reject message request')
  .addAction('reject message request', 'reject-request', ACTION.REJECT_MESSAGE_REQUEST, {
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
