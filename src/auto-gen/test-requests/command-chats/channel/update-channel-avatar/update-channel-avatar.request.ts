import { VAR, ACTION, HEADER_LIST } from '../../../../enums';

export const UpdateChannelAvatarRequest = {
  action: ACTION.UPDATE_CHANNEL_AVATAR,
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    avatarPath: VAR.avatarPath
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
