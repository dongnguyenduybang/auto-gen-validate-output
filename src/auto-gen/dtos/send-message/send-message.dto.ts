
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDefined,
  IsOptional
} from '../../decorator/dto-decorator';

export class SendMessageDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  workspaceId?: string = '';

  @IsString()
  @IsNotEmpty()
  channelId?: string = '';

  @IsNumber()
  @IsNotEmpty()
  @IsDefined()
  content?: string = '';

  @IsString()
  @IsOptional()
  ref?: string = '';
}
