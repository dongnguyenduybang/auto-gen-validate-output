import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const LeaveChannelRequest = new DTOBuilder()
  .startStep('leave channel')
  .addAction('leave channel', 'leave-channel', ACTION.LEAVE_CHANNEL, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
    },
  })
  .addBeforeAll('accept invitation', 'accept-invite', ACTION.ACCEPT_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      invitationLink: VAR.invitationLink,
    },
  })
  .execute();
