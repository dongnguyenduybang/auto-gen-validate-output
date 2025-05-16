import { VAR, ACTION, HEADER_LIST } from '../../enums';

export const SendDmMessageRequest = {
  action: ACTION.SEND_DM_MESSAGE,
  headers: HEADER_LIST.create({token: VAR.token}),
  body: {
    userId: VAR.userId1,
    content: 'test response send dm message',
    ref: 'ref',
  },
  afterAll: [
  ],
};
