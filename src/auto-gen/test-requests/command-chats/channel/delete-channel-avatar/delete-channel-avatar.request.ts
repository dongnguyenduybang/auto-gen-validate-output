import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { RequestTestSuite } from '../../../../utils/declarations';

export const DeleteChannelAvatarRequest: RequestTestSuite = {
  action: ACTION.DELETE_CHANNEL_AVATAR,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    workspaceId: VAR.workspaceId,
    channelId: VAR.channelId
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
