import { MediaPermissionSettingEnum } from '@enum/';
import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  IsNotNull,
  IsEnum,
} from '@decorators/';

export class UpdateDmMediaPermissionDTO {

  @IsString({ message: `Could not resolve permission type` })
  @IsDefined({ message: `Could not resolve permission type` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Unauthorized request` })
  @IsNotNull({ message: `Could not resolve permission type`})
  userId: string = '';

  @IsEnum(MediaPermissionSettingEnum)
  @IsDefined()
  @IsNotEmpty()
  mediaPermissionSetting: MediaPermissionSettingEnum = 0
}
