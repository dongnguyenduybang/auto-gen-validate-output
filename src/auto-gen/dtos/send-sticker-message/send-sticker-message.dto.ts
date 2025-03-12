import {
  IsNotEmpty,
  IsString,
  IsDefined,
  IsOptional,
} from '../../decorator/dto-decorator';

export class SendStickerMessageDTO {
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
  stickerId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  ref?: string = '';
}
