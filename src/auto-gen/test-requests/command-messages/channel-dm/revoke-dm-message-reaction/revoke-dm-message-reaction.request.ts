import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const RevokeDmMessageReactionRequest = new DTOBuilder()
  .startStep('revoke dm message reaction')
  .addAction(
    'revoke dm message reaction',
    'revoke-dm-msg-reaction',
    ACTION.REVOKE_DM_MESSAGE_REACTION,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        userId: VAR.userId1,
        messageId: VAR.messageId,
        emoji: '🚀',
      },
    }
  )
  .addBeforeAll('send dm message', 'send-dm-msg', ACTION.SEND_DM_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .addBeforeAll(
    'add dm message reaction',
    'add-dm-msg-reaction',
    ACTION.ADD_DM_MESSAGE_REACTION,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        messageId: VAR.messageId,
        userId: VAR.userId1,
        emoji: '🚀',
      },
    }
  )
  .execute();
