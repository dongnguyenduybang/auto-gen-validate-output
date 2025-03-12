import {
  IsNotEmpty,
  IsString,
  IsDefined,
  IsOptional,
} from '../../decorator/dto-decorator';

export class RevokeMessageReactionDTO {
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

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  emoji?: string = '';
}
