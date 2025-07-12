import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const TransferOwnershipLeaveChannelRequest = new DTOBuilder()
  .startStep('transfer ownership then leave channel')
  .addAction(
    'transfer ownership and leave channel',
    'transfer-ownership-leave-channel',
    ACTION.TRANSFER_OWNERSHIP_LEAVE_CHANNEL,
    {
      headers: HEADER_LIST.create({ token: VAR.token }),
      body: {
        channelId: VAR.channelId,
        workspaceId: VAR.workspaceId,
        userId: VAR.userId1,
      },
    },
  )
  .addBeforeAll('accept invitation', 'accept-invite', ACTION.ACCEPT_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      invitationLink: VAR.invitationLink,
    },
  })
  .execute();
