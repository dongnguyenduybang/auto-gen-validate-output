import { ACTION, APIPath, HEADER_LIST, METHOD, VAR } from '../../enums';

export const SendMessageRequest = {
  action: ACTION.SEND_MESSAGE,
  headers: HEADER_LIST.create({token: VAR.token}),
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    content: 'test DTO send message',
    ref: 'ref',
  },
  beforeAll: [
  ],
  afterAll: [
    {
      action: ACTION.DELETE_MOCKED_USER,
      body: {
        prefix: 'testabcssd',
      },
    },
  ],
};
