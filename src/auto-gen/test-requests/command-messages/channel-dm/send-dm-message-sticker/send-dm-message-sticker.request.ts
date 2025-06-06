import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const SendDmMessageStickerRequest = {
  action: ACTION.SEND_DM_MESSAGE_STICKER,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1,
    stickerId: VAR.stickerId,
    ref: 'ref',
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
