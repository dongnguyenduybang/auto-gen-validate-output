import { SagaTestSuite } from '../../utils/declarations';
import {
  VAR,
  ACTION,
  HEADER_LIST,
} from '../../enums';
import { executeFunction } from '../../utils/expect-config';

export const CreateChannelSaga: SagaTestSuite = {
  options: [
    {
      beforeEach: [
        {
          action: ACTION.MOCK_USER,
          body: {
            prefix: 'testabc',
            quantity: 2,
            badge: 0,
          }
        },
        {
          action: ACTION.CREATE_CHANNEL,
          body: {
            name: 'channel1',
            workspaceId: VAR.workspaceId
          },
          headers: HEADER_LIST.create({
            token: VAR.token
          })
        }
      ],
    },
    {
      afterEach: [
        {
          action: ACTION.DELETE_MOCKED_USER,
          body: {
            prefix: 'testabc'
          }
        }
      ]
    }
  ],
  steps: [
    {
      title: 'should return false when member update channel name',
      step: [
        {
          action: ACTION.ACCEPT_INVITATION,
          body: {
            invitationLink: VAR.invitationLink,
          },
          headers: HEADER_LIST.create({
            token: VAR.token1,
          }),
          expect: {
            ok: true,
            data: executeFunction(
              'data.channel',
              ACTION.GET_CHANNEL,
              {
                body: { channelId: VAR.channelId, workspaceId: VAR.workspaceId }
              },
              null,
              null
            ),
            includes: [
              executeFunction(
                'includes.members',
                ACTION.LIST_MEMBERS,
                {
                  body: { channelId: VAR.channelId, workspaceId: VAR.workspaceId }
                },
                null,
                null
              ),
            ]
          },
        },
      ],
    },

  ],
};
