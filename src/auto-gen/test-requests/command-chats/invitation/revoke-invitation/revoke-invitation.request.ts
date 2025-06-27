import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const RevokeInvitationRequest = new DTOBuilder()
  .startStep('revoke invitation')
  .addAction('revoke invitation', 'revoke-invite', ACTION.REVOKE_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      code: VAR.code,
    },
  })
  .addBeforeAll('create invitation', 'create-invite', ACTION.CREATE_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
      expiresIn: 10000,
      maxUses: 1,
    },
  })
  .execute();
