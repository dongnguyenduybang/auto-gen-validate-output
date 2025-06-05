import { VAR, ACTION, HEADER_LIST } from '../../../../enums/index';

export const UpdateChannelNameRequest = {
  action: ACTION.UPDATE_CHANNEL_NAME,
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    name: 'channel name 2',
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [],
      beforeEach: [
       
      ],
      afterEach: [],
      afterAll: [
      ]
    },

  ],
};
