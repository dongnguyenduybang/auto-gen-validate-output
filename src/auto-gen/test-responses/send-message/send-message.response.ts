import { ACTION, HEADER_LIST, VAR } from '../../enums';

export const SendMessageResponse = {
  action: ACTION.SEND_MESSAGE,
  body: {
    channelId: VAR.channelId,
    workspaceId: '0',
    content: 'test response send message',
    ref: 'ref',
  },
  headers: HEADER_LIST.create({token: VAR.token}),
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
    },
  ],
  afterAll: [],
};
