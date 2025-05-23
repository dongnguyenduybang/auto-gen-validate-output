import {
  IsDefined,
  IsNotEmpty,
  IsULID,
  IsInvalid,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator';

export class UpdateMessageDTO {
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

  @IsString()
  @IsULID()
  @IsDefined()
  messageId: string = '';

  @IsString()
  @IsDefined()
  @MinLength(1)
  @MaxLength(2000)
  content: string = '';

  @IsOptional()
  @IsString()
  @IsDefined()
  @MinLength(1)
  ref: string = '';
}
