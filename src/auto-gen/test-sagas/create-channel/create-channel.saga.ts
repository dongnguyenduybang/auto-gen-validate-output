import { METHOD } from '../../enums/method.enum';
import { APIPath } from '../../enums/path.enum';
import { HeaderList } from '../../enums/header.enum';
import { Operator } from '../../enums/operator.enum';
import { ChannelTypeEnum } from '../../enums/channel-type.enum';
import { ACTION } from '../../enums/action';

const prefixMockUser = new Date().toISOString().replace(/[^a-zA-Z0-9]/g, '');
export const CreateChannelSaga = {
  steps: [
    {
      action: ACTION.MOCK_USER,
      body: {
        quantity: 2,
        prefix: prefixMockUser,
        badge: 0,
      },
    },
    {
      action: ACTION.CREATE_CHANNEL,
      method: METHOD.POST,
      path: APIPath.Channel.CreateChannel,
      body: {
        workspaceId: '0',
        name: 'channel1',
        channelType: ChannelTypeEnum.CHANNEL_TYPE_ENUM_DM,
      },
      headers: HeaderList.Token(),
      expect: {
        ok: { operator: Operator.EQUAL, expect: false },
      },
    },
    {
      action: ACTION.DELETE_MOCKED_USER,
      body: { prefix: prefixMockUser },
    },
  ],
};
