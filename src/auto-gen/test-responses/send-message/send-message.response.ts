import { ACTION, HEADER_LIST, VAR } from '../../enums';

export const SendMessageResponseConfig = {
  action: ACTION.SEND_MESSAGE,
  body: {
    channelId: VAR.channelId,
    workspaceId: '0',
    content: 'test response send message',
    ref: 'ref',
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [
        {
          action: ACTION.MOCK_USER,
          body: {
            quantity: 2,
            prefix: 'testABACDD',
            badge: 0,
          },
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
      beforeEach: [],
      afterEach: [],
      afterAll: [
        {
          action: ACTION.DELETE_MOCKED_USER,
          body: {
            prefix: 'testABACDD'
          }
        }
      ]
    },

  ],
};

