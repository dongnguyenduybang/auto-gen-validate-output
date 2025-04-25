import {
  IsDefined,
  IsNotEmpty,
  IsULID,
  IsNotNull,
  IsChecked,
  IsOptional,
} from '../../decorator/general-decorator';
import {
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator/string-decorator';

export class UpdateMessageDTO {
  @IsDefined({ message: `Could not resolve permission type` })
  @IsChecked({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsDefined({ message: `Could not resolve permission type` })
  @IsChecked({ message: `Unsupported permission type` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

  @IsString()
  @IsULID()
  @IsNotEmpty({ message: `messageId must NOT have fewer than 1 characters` })
  @IsDefined()
  messageId: string = '';

  @IsString()
  @IsNotEmpty()
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
