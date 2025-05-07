import { METHOD, APIPath, HeaderList, VAR, ACTION } from '../../enums';

export const UpdateMessageRequest = {
  method: METHOD.PUT,
  path: APIPath.Message.UpdateMessage,
  headers: HeaderList.Token(),
  body: {
    channelId: VAR.channelId,
    messageId: VAR.messageId1,
    workspaceId: '0',
    content: 'test response update message',
    ref: 'ref',
  },
  beforeAll: [
    {
      action: ACTION.MOCK_USER,
      body: {
        quantity: 2,
        prefix: 'testUpdateMessage',
        badge: 0,
      },
    },
    {
      action: ACTION.SEND_MESSAGE,
    },
    {
      action: 'sendMessage',
      method: METHOD.POST,
      path: APIPath.Message.SendMessage,
      body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        content: 'duybang12345',
        ref: 'abc',
      },
      headers: HeaderList.Token(),
    },
  ],
  afterAll: [
    {
      action: ACTION.DELETE_MOCKED_USER,
      method: METHOD.DELETE,
      path: APIPath.Faker.DeleteMockedUsers,
      body: {
        prefix: 'testUpdateMessage',
      },
    },
  ],
};
