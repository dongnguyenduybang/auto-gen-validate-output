import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UnbanFromChannelRequest = new DTOBuilder()
  .startStep('unban user from channel')
  .addAction(
    'unban user',
    'unban-from-channel',
    ACTION.UNBAN_FROM_CHANNEL,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        channelId: VAR.channelId,
        workspaceId: VAR.workspaceId,
        userId: VAR.userId1,
      },
    },
  )
  .addBeforeAll(
    'accept invitation',
    'accept-invite',
    ACTION.ACCEPT_INVITATION,
    {
      headers: HEADER_LIST.create({ token: VAR.token1 }),
      body: {
        invitationLink: VAR.invitationLink,
      },
    },
  )
  .addBeforeAll(
    'ban user',
    'ban-from-channel',
    ACTION.BAN_FROM_CHANNEL,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        channelId: VAR.channelId,
        workspaceId: VAR.workspaceId,
        userId: VAR.userId1,
      },
    },
  )
  .execute();
