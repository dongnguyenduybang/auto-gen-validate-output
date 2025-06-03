import {
  IsDefined,
  IsNotEmpty,
  IsULID,
  IsInvalid,
  IsOptional,
  IsString,
  IsEmoji,
} from '../../../../decorator';

export class AddMessageReactionDTO {
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
  @IsULID()
  @IsDefined()
  messageId: string = '';

  @IsEmoji({ value: 1 })
  @IsDefined()
  @IsString()
  @IsOptional()
  emoji: string = '';

}
