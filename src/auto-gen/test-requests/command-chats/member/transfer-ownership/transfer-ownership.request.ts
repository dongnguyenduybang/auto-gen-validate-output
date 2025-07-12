import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const TransferOwnershipRequest = new DTOBuilder()
  .startStep('transfer ownership')
  .addAction('transfer ownership to user', 'transfer-ownership', ACTION.TRANSFER_OWNERSHIP, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      userId: VAR.userId1,
    },
  })
  .addBeforeAll('accept invitation', 'accept-invite', ACTION.ACCEPT_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      invitationLink: VAR.invitationLink,
    },
  })
  .execute();
