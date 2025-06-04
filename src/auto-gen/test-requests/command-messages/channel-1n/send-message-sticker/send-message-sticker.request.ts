import { VAR, ACTION, HEADER_LIST } from '../../../../enums';

export const SendMessageStickerRequest = {
  action: ACTION.SEND_MESSAGE_STICKER,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    workspaceId: VAR.workspaceId,
    channelId: VAR.channelId,
    stickerId: VAR.stickerId,
    ref: 'ref',
  },
  options: [
    {
      beforeAll: [

      ],
      beforeEach: [

      ],
      afterEach: [],
      afterAll: []
    },
  ],
};
