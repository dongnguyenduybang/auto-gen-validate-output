import { ACTION, HEADER_LIST, VAR } from '../../enums';

export const SendMessageRequest = {
  action: ACTION.SEND_MESSAGE,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    content: 'test DTO send message',
    ref: 'ref',
  },
  options: [
    {
      beforeAll: [],
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
      afterEach: [],
      afterAll: [
        {
          action: ACTION.DELETE_MOCKED_USER,
          body: {
            prefix: 'testabc'
          }
        }
      ]
    },

  ],
};
