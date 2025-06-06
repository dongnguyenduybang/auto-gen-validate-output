import { RequestTestSuite } from '../../../../utils/declarations';
import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';

export const SendDmLocationRequest: RequestTestSuite = {
  action: ACTION.SEND_DM_LOCATION,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1,
    content: 'test DTO send message',
    ref: 'ref',
    description: 'description',
    latitude: VAR.latitude,
    longitude: VAR.longitude,
  },
  options: [
    {
      beforeAll: [],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
