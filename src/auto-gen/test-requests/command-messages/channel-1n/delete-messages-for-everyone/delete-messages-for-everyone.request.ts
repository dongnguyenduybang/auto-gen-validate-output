import { RequestTestSuite } from '../../../../utils/declarations';
import { ACTION, HEADER_LIST, VAR } from '../../../../enums/index';

export const DeleteMessagesForEveryoneRequest: RequestTestSuite = {
  action: ACTION.DELETE_MESSAGES_FOR_EVERYONE,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    workspaceId: VAR.workspaceId,
    channelID: VAR.channelId,
    messageId: VAR.messageId,
  },
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_MESSAGE,
          headers: HEADER_LIST.create({ token: VAR.token }),
          body: {
            channelId: VAR.channelId,
            workspaceId: VAR.workspaceId,
            content: 'test DTO send message',
            ref: 'ref',
          },
        },
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
