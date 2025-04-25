import { HeaderList } from '../../enums/header.enum';
import { METHOD } from '../../enums/method.enum';
import { APIPath } from '../../enums/path.enum';
import { VAR } from '../../enums/var-placeholder.enum';

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
