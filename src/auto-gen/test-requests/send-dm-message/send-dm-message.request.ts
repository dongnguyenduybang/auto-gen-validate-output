import { HeaderList } from '../../enums/header.enum';
import { METHOD } from '../../enums/method.enum';
import { APIPath } from '../../enums/path.enum';
import { VAR } from '../../enums/var-placeholder.enum';

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
      action: 'mockUser',
      body: {
        quantity: 2,
        prefix: 'testABACDD',
        badge: 0,
      },
    },
  ],
  afterAll: [
    {
      action: 'deleteMockedUsers',
      method: METHOD.DELETE,
      path: APIPath.Faker.DeleteMockedUsers,
      body: {
        prefix: 'testABACDD',
      },
    },
  ],
};
