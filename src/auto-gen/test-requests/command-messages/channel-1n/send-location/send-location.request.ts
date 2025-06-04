import { RequestTestSuite } from '../../../../utils/declarations';
import { ACTION, HEADER_LIST, VAR } from '../../../../enums';

export const SendLocationRequest: RequestTestSuite = {
  action: ACTION.SEND_LOCATION,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    content: 'test DTO send message',
    ref: 'ref',
    description: 'description',
    latitude: VAR.latitude,
    longitude: VAR.longitude
  },
  options: [
    {
      beforeAll: [

      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [

      ]
    },

  ],
};
