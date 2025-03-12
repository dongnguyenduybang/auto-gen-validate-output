import {
  IsNotEmpty,
  IsString,
  IsDefined,
  IsArray
} from '../../decorator/dto-decorator';

export class DeleteMessagesOnlyMeDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  workspaceId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  channelId: string = '';

  @IsArray()
  @IsNotEmpty()
  @IsDefined()
  messageIds: string[] = [];
}
