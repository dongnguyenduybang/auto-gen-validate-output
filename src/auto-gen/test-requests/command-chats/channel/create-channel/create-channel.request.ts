import { ACTION, ChannelTypeEnum, HEADER_LIST, VAR } from "@enum/";
import { RequestTestSuite } from "@utils/declarations";

export const CreateChannelRequest: RequestTestSuite = {
  action: ACTION.CREATE_CHANNEL,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    workspaceId: VAR.workspaceId,
    name: 'channel1',
    avatar: 'https://cdn.discordapp.com/avatars/942052395175800845/14725a9ab236a5e10dae9fc123ac500e.png?size=1024',
    channelType: ChannelTypeEnum.CHANNEL_TYPE_ENUM_CHANNEL
  },
  options: [
    {   
      beforeAll: [],
      beforeEach: [],
      afterEach: [],
      afterAll: []
    },
  ],
};
