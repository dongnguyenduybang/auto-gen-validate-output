import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  MaxLength,
  MinLength,
} from '@decorators/';

export class UpdateChannelNameDTO {
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
  @MinLength(3)
  @MaxLength(50)
  name: string = ''
}
