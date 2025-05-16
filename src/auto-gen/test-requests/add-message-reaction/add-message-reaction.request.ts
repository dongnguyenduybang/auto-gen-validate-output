import { ACTION, VAR, HeaderList, METHOD, APIPath } from '../../enums';

export const AddMessageReactionRequest = {
  method: METHOD.POST,
  path: APIPath.Message.AddMessageReaction,
  headers: HeaderList.Token(),
  body: {
    channelId: VAR.channelId,
    messageId: VAR.messageId1,
    workspaceId: '0',
    emoji: '🚀',
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
      action: 'createChannel',
    },
    {
      action: ACTION.SEND_MESSAGE,
      method: METHOD.POST,
      path: APIPath.Message.SendMessage,
      body: {
        workspaceId: VAR.workspaceId,
        channelId: VAR.channelId,
        content: 'duybang12345',
        ref: 'abc',
      },
      headers: HeaderList.Token(),
    },
  ],
  afterAll: [],
};
