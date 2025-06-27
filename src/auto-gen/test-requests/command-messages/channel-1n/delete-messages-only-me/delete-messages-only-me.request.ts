import { DTOBuilder } from '../../../../utils/chain-dto';
import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';

export const DeleteMessagesOnlyMeRequest = new DTOBuilder()
  .startStep('delete messages only for me')
  .addBeforeAll('send message', '', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      content: 'test DTO send message',
      ref: 'ref',
    },
  })
  .addAction(
    'delete message only me',
    'delete-message-only-me',
    ACTION.DELETE_MESSAGES_ONLY_ME,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        workspaceId: VAR.workspaceId,
        channelID: VAR.channelId,
        messageIds: [VAR.messageId],
      },
    },
  )
  .execute();
