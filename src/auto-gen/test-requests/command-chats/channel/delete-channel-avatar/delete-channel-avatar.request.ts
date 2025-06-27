import { ACTION, HEADER_LIST, VAR } from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const DeleteChannelAvatarRequest = new DTOBuilder()
  .startStep('delete channel avatar')
  .addAction('delete channel avatar', 'delete-avatar', ACTION.DELETE_CHANNEL_AVATAR, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      workspaceId: VAR.workspaceId,
      channelId: VAR.channelId,
    },
  })
  .addBeforeAll('update channel avatar', 'update-avatar', ACTION.UPDATE_CHANNEL_AVATAR, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      channelId: VAR.channelId,
      workspaceId: VAR.workspaceId,
      avatarPath: VAR.avatarPath,
    },
  })
  .execute();
