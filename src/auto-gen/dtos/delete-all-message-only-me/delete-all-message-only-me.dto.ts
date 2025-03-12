import {
  IsNotEmpty,
  IsString,
  IsDefined
} from '../../decorator/dto-decorator';

export class DeleteAllMessageOnlyMeDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  workspaceId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  channelId: string = '';

}
