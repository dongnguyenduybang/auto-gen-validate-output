import { VAR, ACTION, HEADER_LIST } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UpdateChannelNameRequest = new DTOBuilder()
  .startStep('update channel name')
  .addAction('update channel name', 'update-name', ACTION.UPDATE_CHANNEL_NAME, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      name: 'channel name 2',
    },
  })
  .execute();
