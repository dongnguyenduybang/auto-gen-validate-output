import { IsDefined, IsNotEmpty, IsULID } from '../../decorator/general-decorator';
import {
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator/string-decorator';

export class SendMessageDTO {
  @IsString({
    message: `Could not resolve permission type`,
  })
  @IsNotEmpty({
    message: `Could not resolve permission type`,
  })
  @IsDefined({
    message: `Could not resolve permission type`,
  })
  workspaceId: string = '';

  @IsString({
    message: `Could not resolve permission type`})
  @IsNotEmpty({
    message: `Could not resolve permission type`,
  })
  @IsULID({
    message: `Invalid ChannelId`
  })
  @IsDefined({
    message: `Unsupported permission type`,
  })
  channelId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(1)
  @MaxLength(6000)
  content: string = '';
}




