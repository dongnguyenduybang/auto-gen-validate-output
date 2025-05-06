import { METHOD, APIPath, HeaderList, VAR, ACTION } from '../../enums';

export const SendDmMessageRequest = {
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
      action: ACTION.MOCK_USER,
      body: {
        quantity: 2,
        prefix: 'testABACDD',
        badge: 0,
      },
    },
  ],
  afterAll: [
    {
      action: ACTION.DELETE_MOCKED_USER,
      method: METHOD.DELETE,
      path: APIPath.Faker.DeleteMockedUsers,
      body: {
        prefix: 'testABACDD',
      },
    },
  ],
};
