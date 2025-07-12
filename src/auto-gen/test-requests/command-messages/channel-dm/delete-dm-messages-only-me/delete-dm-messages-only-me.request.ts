import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const DeleteDmMessagesOnlyMeRequest = new DTOBuilder()
  .startStep('delete DM messages only me')
  .addAction('delete dm messages only me', 'delete-dm-msgs-only-me', ACTION.DELETE_DM_MESSAGES_ONLY_ME, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      messageIds: [VAR.messageId],
    },
  })
  .addBeforeAll('send dm message', 'send-dm', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      userId: VAR.userId,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .execute();
