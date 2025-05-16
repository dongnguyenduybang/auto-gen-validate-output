import { ACTION, HEADER_LIST, VAR } from '../../enums';

export const SendMessageResponse = {
  action: ACTION.SEND_MESSAGE,
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    content: 'test response send message',
    ref: 'ref',
  },
  headers: HEADER_LIST.create({token: VAR.token}),
  beforeAll: [
  ],
  afterAll: [],
};
