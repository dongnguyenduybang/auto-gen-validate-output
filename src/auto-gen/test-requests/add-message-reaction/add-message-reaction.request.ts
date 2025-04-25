import { HeaderList } from '../../enums/header.enum';
import { METHOD } from '../../enums/method.enum';
import { APIPath } from '../../enums/path.enum';
import { VAR } from '../../enums/var-placeholder.enum';

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
    {
      action: 'sendMessage',
      method: METHOD.POST,
      path: APIPath.Message.SendMessage,
      body: {
        channelId: VAR.channelId,
        content: 'duybang12345',
        ref: 'abc',
      },
      headers: HeaderList.Token(),
    },
  ],
  afterAll: [],
};
