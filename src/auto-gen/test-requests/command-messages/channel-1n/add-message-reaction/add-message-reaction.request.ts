import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const AddMessageReactionRequest = new DTOBuilder()
  .startStep('add reaction to a message')
  .addBeforeAll('send message', 'send-message', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: '0',
      channelId: VAR.channelId,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .addAction(
    'add reaction',
    'add-reaction',
    ACTION.ADD_MESSAGE_REACTION,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        channelId: VAR.channelId,
        messageId: VAR.messageId,
        workspaceId: VAR.workspaceId,
        emoji: '🚀',
      },
    },
  )
  .execute();
