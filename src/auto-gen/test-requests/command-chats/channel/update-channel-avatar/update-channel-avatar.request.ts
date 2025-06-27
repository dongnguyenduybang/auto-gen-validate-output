import { VAR, ACTION, HEADER_LIST } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UpdateChannelAvatarRequest = new DTOBuilder()
  .startStep('update channel avatar')
  .addAction('update channel avatar', 'update-avatar', ACTION.UPDATE_CHANNEL_AVATAR, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      avatarPath: VAR.avatarPath,
    },
  })
  .execute();
