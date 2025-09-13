import { VAR, ACTION, HEADER_LIST } from '@enum/';

export const LeaveChannelRequest = {
  action: ACTION.LEAVE_CHANNEL,
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
  },
  headers: HEADER_LIST.create({ token: VAR.token1 }),
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
        
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },
  ],
};
