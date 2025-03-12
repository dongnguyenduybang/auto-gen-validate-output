import {
  IsNotEmpty,
  IsString,
  IsDefined,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from '../../decorator/dto-decorator';

export class SendLocationDTO {
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
  latitude: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  longitude: string = '';

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  ref?: string = '';

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  content?: string = '📍 Location';
}
