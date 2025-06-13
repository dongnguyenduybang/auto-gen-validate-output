import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const UnpinMessageRequest = {
  action: ACTION.PIN_UNPIN_MESSAGE,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    workspaceId: VAR.workspaceId,
    channelId: VAR.channelId,
    messageId: VAR.messageId,
    status: false,
  },
  options: [
    {
      beforeAll: [
        {
          action: ACTION.SEND_MESSAGE,
          body: {
            channelId: VAR.channelId,
            workspaceId: VAR.workspaceId,
            content: 'test DTO send message',
            ref: 'ref',
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
        },
        {
          action: ACTION.PIN_UNPIN_MESSAGE,
          headers: HEADER_LIST.create({ token: VAR.token }),
          body: {
            workspaceId: VAR.workspaceId,
            channelId: VAR.channelId,
            messageId: VAR.messageId,
            status: true,
          },
        }
      ],
      beforeEach: [],
      afterEach: [],
      afterAll: [],
    },
  ],
};
