import { MediaPermissionSettingEnum } from '../../../../enums';
import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  MaxLength,
  MinLength,
  IsNotNull,
  IsEnum,
} from '../../../../decorator';

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
