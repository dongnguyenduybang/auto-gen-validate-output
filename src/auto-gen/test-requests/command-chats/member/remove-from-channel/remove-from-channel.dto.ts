import {
  IsDefined,
  IsNotEmpty,
  IsInvalid,
  IsString,
  IsNotNull,
} from '../../../../decorator/index';

export class RemoveFromChannelDTO {
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

  @IsString({ message: `Could not resolve permission type` })
  @IsDefined({ message: `Could not resolve permission type` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsInvalid({ message: `Unauthorized request` })
  @IsNotNull({ message: `Could not resolve permission type` })
  userId: string = '';

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  reason: string = '';
}
