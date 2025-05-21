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
            includes: [
              executeFunction(
                'includes.users',
                ACTION.GET_USER,
                [null,
                  { userId: VAR.userId1 }
                ],
                ['userId'],
              ),
            ]
          },
        },
        {
          action: ACTION.UPDATE_CHANNEL_NAME,
          body: {
            workspaceId: VAR.workspaceId, channelId: VAR.channelId, name: 'new name gr'
          },
          headers: HEADER_LIST.create({ token: VAR.token1 }),
          expect: {
            ok: true
          }
        },

      ],
    },
    {
      title: 'should return true when owner update channel name',
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
            includes: [
              executeFunction(
                'includes.users',
                ACTION.GET_USER,
                [null,
                  { userId: VAR.userId1 }
                ],
                ['userId'],
              ),
            ]
          },
        },
        {
          action: ACTION.UPDATE_CHANNEL_NAME,
          body: {
            workspaceId: VAR.workspaceId, channelId: VAR.channelId, name: 'new name gr'
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
          expect: {
            ok: true
          }
        },
      ],
    },

  ],
};