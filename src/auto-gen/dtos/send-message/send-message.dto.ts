import {
  IsNotEmpty,
  IsString,
  IsDefined,
  IsOptional,
} from '../../decorator/dto-decorator';

export class SendMessageDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  workspaceId?: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  channelId?: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  content?: string = '';

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  ref?: string = '';
}
