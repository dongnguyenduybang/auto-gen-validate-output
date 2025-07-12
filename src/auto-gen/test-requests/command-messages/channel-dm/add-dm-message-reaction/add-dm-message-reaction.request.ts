import { ACTION, HEADER_LIST, VAR } from "../../../../enums";
import { DTOBuilder } from "../../../../utils/chain-dto";

export const AddDmMessageReaction = new DTOBuilder()
  .startStep('add dm message reaction')
  .addAction('add dm message reaction', 'add-reaction', ACTION.ADD_DM_MESSAGE_REACTION, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      messageId: VAR.messageId,
      emoji: '🚀',
    },
  })
  .addBeforeAll('send dm message', 'send-message', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .execute();
