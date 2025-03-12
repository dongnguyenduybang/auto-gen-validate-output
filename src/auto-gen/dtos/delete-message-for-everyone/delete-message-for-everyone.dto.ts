import {
  IsNotEmpty,
  IsString,
  IsDefined
} from '../../decorator/dto-decorator';

export class DeleteMessageForEveryoneDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  workspaceId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  channelId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  messageId: string = '';
}
