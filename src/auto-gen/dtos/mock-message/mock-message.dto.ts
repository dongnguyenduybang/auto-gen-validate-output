import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from '../../decorator/dto-decorator';

export class MockMessageDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  workspaceId?: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  channelId?: string = '';

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(100)
  quantity?: number = 0;
}
