import { APIPath, HeaderList, METHOD, VAR } from "../../enums";

export const SendDmMessageResponse = {
  method: METHOD.POST,
  path: APIPath.Message.SendDMMessage,
  headers: HeaderList.Token(),
  body: {
    userId: VAR.userId1,
    content: 'test response send dm message',
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
  ],
  afterAll: [],
};
