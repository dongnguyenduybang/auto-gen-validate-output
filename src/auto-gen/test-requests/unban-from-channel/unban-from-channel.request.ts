import { VAR, ACTION, HEADER_LIST } from '../../enums';

export const UnbanFromChannelRequest = {
  action: ACTION.UNBAN_FROM_CHANNEL,
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    userId: VAR.userId1,
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [
        {
          action: ACTION.ACCEPT_INVITATION,
          headers: HEADER_LIST.create({ token: VAR.token1 }),
          body: {
            invitationLink: VAR.invitationLink
          }
        },
        {
          action: ACTION.BAN_FROM_CHANNEL,
          body: {
            channelId: VAR.channelId,
            workspaceId: VAR.workspaceId,
            userId: VAR.userId1,
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
        }
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },
  ],
};
