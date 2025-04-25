import { APIPath } from '../../enums/path.enum';
import { METHOD } from '../../enums/method.enum';
import { HeaderList } from '../../enums/header.enum';
import { ChannelTypeEnum } from '../../enums/channel-type.enum';

const prefixMockUser= new Date().toISOString().replace(/[^a-zA-Z0-9]/g, '');

export const CreateChannelResponse = {
  method: METHOD.POST,
  path: APIPath.Channel.CreateChannel,
  headers: HeaderList.Token(),
  body: {
    workspaceId: '0',
    name: 'channel1',
    channelType: ChannelTypeEnum.CHANNEL_TYPE_ENUM_CHANNEL,
  },
  beforeAll: [
    {
      action: 'mockUser',
      body: {
        quantity: 2,
        prefix: prefixMockUser,
        badge: 0,
      },
    },
  ],
  afterAll: [
    // {
    //   action: "deleteMockedUsers",
    //   method: METHOD.DELETE,
    //   path: APIPath.Faker.DeleteMockedUsers,
    //   body: {
    //     prefix: prefixMockUser,
    //   }
    // }
  ],
}