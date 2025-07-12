import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const DismissAsAdminRequest = new DTOBuilder()
  .startStep('dismiss as admin')
  .addAction('dismiss user as admin', 'dismiss-admin', ACTION.DISMISS_AS_ADMIN, {
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
  .addBeforeAll('assign as admin', 'assign-admin', ACTION.ASSIGN_AS_ADMIN, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      userId: VAR.userId1,
    },
  })
  .execute();
