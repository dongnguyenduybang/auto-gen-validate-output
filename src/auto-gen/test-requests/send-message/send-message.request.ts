import { ACTION, APIPath, HeaderList, METHOD, VAR } from '../../enums';

export const SendMessageRequest = {
  method: METHOD.POST,
  path: APIPath.Message.SendMessage,
  headers: HeaderList.Token(),
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    content: 'test DTO send message',
    ref: 'ref',
  },
  beforeAll: [
    {
      action: ACTION.MOCK_USER,
      body: {
        quantity: 2,
        prefix: 'testDTO',
        badge: 0,
      },
    },
    {
      action: ACTION.CREATE_CHANNEL,
    },
  ],
  afterAll: [
    {
      action: ACTION.DELETE_MOCKED_USER,
      method: METHOD.DELETE,
      path: APIPath.Faker.DeleteMockedUsers,
      body: {
        prefix: 'testDTO',
      },
    },
  ],
};
