import { RequestTestSuite } from '../../../../utils/declarations';
import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';

export const MarkAsReadRequest: RequestTestSuite = {
  action: ACTION.MARK_AS_READ,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    messageId: VAR.messageId
  },
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_MESSAGE,
          body: {
            workspaceId: VAR.workspaceId,
            channelId: VAR.channelId,
            content: 'duybang12345',
            ref: 'abc',
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
        },
      ],
      beforeEach: [

      ],
      afterEach: [],
      afterAll: []
    },
  ],
};
