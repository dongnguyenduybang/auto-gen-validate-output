import {
  ACTION,
  APIPath,
  HeaderList,
  METHOD,
  Operator,
  VAR,
} from '../../enums';

const prefixMockUser = new Date().toISOString().replace(/[^a-zA-Z0-9]/g, '');
const channelName = 'new channel name';

export const MemberUpdateChannelNameSaga = {
  steps: [
    {
      action: ACTION.MOCK_USER,
      body: {
        quantity: 3,
        prefix: prefixMockUser,
        badge: 0,
      },
    },
    {
      action: ACTION.CREATE_CHANNEL,
      body: { name: 'channel for edit', workspaceId: '0' },
    },
    {
      action: ACTION.ACCEPT_INVITATION,
      method: METHOD.POST,
      path: APIPath.Invitation.AcceptInvitation,
      headers: HeaderList.Token1(),
      body: { invitationLink: VAR.invitationLink },
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
      },
    },
    {
      action: ACTION.UPDATE_CHANNEL_NAME,
      method: METHOD.PUT,
      path: APIPath.Channel.UpdateChannelName,
      headers: HeaderList.Token1(),
      body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        name: channelName,
      },
      expect: {
        ok: { operator: Operator.EQUAL, expect: false },
      },
    },
    {
      action: ACTION.DELETE_MOCKED_USER,
      method: METHOD.DELETE,
      path: APIPath.Faker.DeleteMockedUsers,
      body: { prefix: prefixMockUser },
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
      },
    },
  ],
};
