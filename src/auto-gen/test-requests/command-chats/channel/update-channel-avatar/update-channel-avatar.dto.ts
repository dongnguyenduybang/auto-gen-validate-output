import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  isValidURL,
} from '@decorators/';

export class UpdateChannelAvatarDTO {
  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @isValidURL()
  avatarPath: string = ''
}
