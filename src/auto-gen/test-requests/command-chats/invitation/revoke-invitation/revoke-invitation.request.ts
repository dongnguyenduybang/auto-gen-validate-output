import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const RevokeInvitationRequest = {
  action: ACTION.REVOKE_INVITATION,
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    code: VAR.code,
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [
        {
          action: ACTION.CREATE_INVITATION,
          headers: HEADER_LIST.create({ token: VAR.token }),
          body: {
            workspaceId: VAR.workspaceId,
            channelId: VAR.channelId,
            expiresIn: 10000,
            maxUses: 1,
          },
        },
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
