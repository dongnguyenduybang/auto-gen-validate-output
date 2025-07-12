import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const RemoveFromChannelRequest = new DTOBuilder()
  .startStep('remove from channel')
  .addAction('remove user from channel', 'remove-user', ACTION.REMOVE_FROM_CHANNEL, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      userId: VAR.userId1,
      reason: 'spam',
    },
  })
  .addBeforeAll('accept invitation', 'accept-invite', ACTION.ACCEPT_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      invitationLink: VAR.invitationLink,
    },
  })
  .execute();
