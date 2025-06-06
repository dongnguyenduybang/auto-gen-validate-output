import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const RemoveFromChannelRequest = {
  action: ACTION.REMOVE_FROM_CHANNEL,
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    userId: VAR.userId1,
    reason: 'spam',
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [
        {
          action: ACTION.ACCEPT_INVITATION,
          headers: HEADER_LIST.create({ token: VAR.token1 }),
          body: {
            invitationLink: VAR.invitationLink,
          },
        },
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
