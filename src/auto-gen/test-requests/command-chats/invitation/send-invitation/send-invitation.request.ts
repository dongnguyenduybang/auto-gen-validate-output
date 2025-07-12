import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const SendInvitationRequest = new DTOBuilder()
  .startStep('send invitation')
  .addAction('send invitation', 'send-invite', ACTION.SEND_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      invitationLink: VAR.invitationLink,
      userIds: [VAR.userId1],
    },
  })
  .execute();
