import { ACTION, APIPath, HeaderList, METHOD, VAR } from "../../enums";

export const SendMessageResponse = {
  method: METHOD.POST,
  path: APIPath.Message.SendMessage,
  headers: HeaderList.Token(),
  body: {
    channelId: VAR.channelId,
    workspaceId: '0',
    content: 'test response send message',
    ref: 'ref',
  },
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
