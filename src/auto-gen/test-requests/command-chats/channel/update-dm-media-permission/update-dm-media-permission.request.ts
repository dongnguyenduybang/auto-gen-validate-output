import { ACTION, HEADER_LIST, MediaDmPermissionSettingEnum, VAR } from "../../../../enums/index";
import { RequestTestSuite } from "../../../../utils/declarations";

export const UpdateDmMediaPermissionRequest: RequestTestSuite = {
  action: ACTION.UPDATE_DM_MEDIA_PERMISSION_SETTING,
  headers: HEADER_LIST.create({ token: VAR.token }),
  body: {
    userId: VAR.userId1,
    mediaPermissionSetting: MediaDmPermissionSettingEnum.MEDIA_PERMISSION_SETTING_ENUM_ALLOW
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
