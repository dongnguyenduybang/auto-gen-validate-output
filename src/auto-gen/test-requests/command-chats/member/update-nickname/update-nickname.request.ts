import { VAR, ACTION, HEADER_LIST } from '@enum/';

export const UpdateNicknameRequest = {
  action: ACTION.UPDATE_NICKNAME,
  body: {
    channelId: VAR.channelId,
    workspaceId: VAR.workspaceId,
    userId: VAR.userId,
    nickname: 'test update nickname',
  },
  headers: HEADER_LIST.create({ token: VAR.token }),
  options: [
    {
      beforeAll: [],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },
  ],
};
