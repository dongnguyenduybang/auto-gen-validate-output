import { ACTION, APIPath, HeaderList, METHOD, VAR } from "../../enums";

export const UpdateMessageResponse = {
  method: METHOD.PUT,
  path: APIPath.Message.UpdateMessage,
  header: HeaderList.Token(),
  body: {
    channelId: VAR.channelId,
    workspaceId: '0',
    messageId: VAR.messageId1,
    content: 'test response update message',
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
    {
      action: ACTION.SEND_MESSAGE,
      method: METHOD.POST,
      path: APIPath.Message.SendMessage,
      body: {
        workspaceId: '0',
        channelId: VAR.channelId,
        content: 'test response send message',
        ref: 'sssssssss',
      },
      headers: HeaderList.Token(),
    },
  ],
  afterAll: [],
};
