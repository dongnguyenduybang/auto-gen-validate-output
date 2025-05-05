import {
  IsString,
  MinLength,
  IsDefined,
  IsNotEmpty,
  IsULID,
  IsChecked,
  IsEmoji,
} from '../../decorator';

export class AddMessageReactionDTO {
  @IsDefined({ message: `Unsupported permission type` })
  @IsChecked({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

  @IsDefined({ message: `Could not resolve permission type` })
  @IsChecked({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsString()
  @IsULID()
  @IsNotEmpty({ message: `messageId must NOT have fewer than 1 characters` })
  @IsDefined()
  messageId: string = '';

  @IsString()
  @IsDefined()
  @IsEmoji()
  emoji: string = '';
}
