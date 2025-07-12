import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const AcceptInvitationRequest = new DTOBuilder()
  .startStep('accept invitation')
  .addAction('accept invitation', 'accept-invite', ACTION.ACCEPT_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token1 }),
    body: {
      invitationLink: VAR.invitationLink,
    },
  })
  .addBeforeAll('send invitation', 'send-invite', ACTION.SEND_INVITATION, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      invitationLink: VAR.invitationLink,
      userIds: [VAR.userId1],
    },
  })
  .execute();
