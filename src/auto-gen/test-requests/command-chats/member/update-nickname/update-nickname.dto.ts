import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  MaxLength,
  MinLength,
  IsNotNull,
} from '@decorators/';

export class UpdateNicknameDTO {
  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsDefined({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Unsupported permission type` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

  @IsString({ message: `Could not resolve permission type` })
  @IsDefined({ message: `Could not resolve permission type` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Unauthorized request` })
  @IsNotNull({ message: `Could not resolve permission type`})
  userId: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  @MaxLength(50)
  nickname: string = '';
}
