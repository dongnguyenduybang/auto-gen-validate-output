import {
  IsNotEmpty,
  IsNotNull,
  IsNumber,
  IsString,
  Max,
  Min,
} from '../../decorator/dto-decorator';

export class MockMessageDTO {
  @IsString()
  @IsNotEmpty()
  workspaceId?: string = '';

  @IsString()
  @IsNotEmpty()
  channelId?: string = '';

  @IsNumber()
  @IsNotEmpty()
  @IsNotNull()
  @Min(1)
  @Max(100)
  quantity?: number = 0;
}
