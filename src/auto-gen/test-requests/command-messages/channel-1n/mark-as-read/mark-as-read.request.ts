import { DTOBuilder } from '../../../../utils/chain-dto';
import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';

export const MarkAsReadRequest = new DTOBuilder()
  .startStep('mark message as read')
  .addBeforeAll('send message', '', ACTION.SEND_MESSAGE, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
      content: 'duybang12345',
      ref: 'abc',
    },
  })
  .addAction(
    'mark as read',
    'mark-as-read',
    ACTION.MARK_AS_READ,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        channelId: VAR.channelId,
        workspaceId: VAR.workspaceId,
        messageId: VAR.messageId,
      },
    },
  )
  .execute();
