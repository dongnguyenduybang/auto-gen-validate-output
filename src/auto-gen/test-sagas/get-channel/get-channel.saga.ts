import {
  ACTION,
  APIPath,
  Element,
  HeaderList,
  METHOD,
  Operator,
  VAR,
} from '../../enums';

const prefixMockUser = new Date().toISOString().replace(/[^a-zA-Z0-9]/g, '');
export const GetChannelSaga = {
  steps: [
    {
      action: ACTION.MOCK_USER,
      body: {
        quantity: 2,
        prefix: prefixMockUser,
        badge: 0,
      },
    },
    {
      action: ACTION.CREATE_CHANNEL,
    },
    {
      action: ACTION.GET_CHANNEL,
      method: METHOD.GET,
      path: APIPath.ViewChannel.GetChannel,
      headers: HeaderList.Token(),
      body: { channelId: VAR.channelId, workspaceId: '0' },
      expect: {
        ok: { operator: Operator.EQUAL, expect: true },
        data: {
          channel: {
            workspaceId: { operator: Operator.EQUAL, expect: '0' },
            channelId: { operator: Operator.EQUAL, expect: VAR.channelId },
            name: { operator: Operator.EQUAL, expect: 'channel1' },
            totalMembers: {
              operator: Operator.EQUAL,
              expect: VAR.totalMembers,
            },
          },
        },
        includes: {
          users: [
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.userId],
            },
            {
              field: 'userType',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
            {
              field: 'profile.userBadgeType',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
          ],
          members: [
            {
              field: 'workspaceId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
            {
              field: 'channelId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.channelId],
            },
            {
              field: 'userId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.userId],
            },
            {
              field: 'role',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['owner'],
            },
            {
              field: 'roles.role',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: ['everyone', 'owner'],
            },
          ],
          channelMetadata: [
            {
              field: 'workspaceId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [0],
            },
            {
              field: 'channelId',
              operator: Operator.INCLUDE,
              element: Element.ALL,
              expect: [VAR.channelId],
            },
          ],
        },
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
