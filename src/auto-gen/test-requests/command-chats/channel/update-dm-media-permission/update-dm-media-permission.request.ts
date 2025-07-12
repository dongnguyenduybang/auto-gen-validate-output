import {
  ACTION,
  HEADER_LIST,
  MediaDmPermissionSettingEnum,
  VAR,
} from '../../../../enums';
import { DTOBuilder } from '../../../../utils/chain-dto';

export const UpdateDmMediaPermissionRequest = new DTOBuilder()
  .startStep('update dm media permission')
  .addAction('update dm media permission', 'update-media-permission', ACTION.UPDATE_DM_MEDIA_PERMISSION_SETTING, {
    headers: HEADER_LIST.create({ token: VAR.token }),
    body: {
      userId: VAR.userId1,
      mediaPermissionSetting: MediaDmPermissionSettingEnum.MEDIA_PERMISSION_SETTING_ENUM_ALLOW,
    },
  })
  .execute();
