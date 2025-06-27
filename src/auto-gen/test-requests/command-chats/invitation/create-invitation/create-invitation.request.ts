import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const CreateInvitationRequest = new DTOBuilder()
  .startStep('create invitation')
  .addAction('create invitation', 'create-invite', ACTION.CREATE_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
      expiresIn: 1000,
      maxUsers: 1,
    },
  })
  .execute();
