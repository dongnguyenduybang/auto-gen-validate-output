import { APIPath, HeaderList, METHOD, VAR } from "../../enums";

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
      action: 'mockUser',
      body: {
        quantity: 2,
        prefix: 'testABACDD',
        badge: 0,
      },
    },
    {
      action: 'createChannel',
    },
  ],
  afterAll: [],
};
