import {
  IsNotEmpty,
  IsString
} from '../../decorator/dto-decorator';

export class AddMessageReactionDTO {
  @IsString()
  @IsNotEmpty()
  workspaceId: string = '';

  @IsString()
  @IsNotEmpty()
  channelId: string = '';

  @IsString()
  @IsNotEmpty()
  messageId: string = '';

  @IsString()
  @IsNotEmpty({
    message: `emoji is invalid, only 1 emoji`})
  emoji?: string = '';
}
