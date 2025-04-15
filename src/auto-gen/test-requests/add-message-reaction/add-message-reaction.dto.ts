import { IsDefined, IsNotEmpty, IsULID, IsChecked, IsEmoji } from '../../decorator/general-decorator';
import {
  IsString,
  MaxLength,
} from '../../decorator/string-decorator';

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
  @IsNotEmpty()
  @IsDefined()
  messageId: string = ''

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsEmoji()
  emoji: string = '';
}



