import { VAR, ACTION, HEADER_LIST } from '../../enums';

export const UpdateMessageRequest = {
  action: ACTION.UPDATE_MESSAGE,
  body: {
    channelId: VAR.channelId,
    messageId: VAR.messageId1,
    workspaceId: '0',
    content: 'test response update message',
    ref: 'ref',
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [],
      beforeEach: [
        {
          action: ACTION.SEND_MESSAGE,
          body: {
            workspaceId: '0',
            channelId: VAR.channelId,
            content: 'duybang12345',
            ref: 'abc',
          },
          headers: HEADER_LIST.create({ token: VAR.token }),
        },
      ],
      afterEach: [],
      afterAll: [
        {
          action: ACTION.DELETE_MOCKED_USER,
          body: {
            prefix: 'testUpdateMessage',
          },
        },
      ]
    },

  ],
};
