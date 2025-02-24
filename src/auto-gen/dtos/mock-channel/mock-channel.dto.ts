import {
  IsNotEmpty,
  MinLength,
  IsNumber,
  IsString,
  Max,
  Min,
  IsDefined,
} from '../../decorator/dto-decorator';

export class MockChannelDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @MinLength(5)
  prefix?: string = '';

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(100)
  quantity?: number = 0;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(1000)
  totalMessages?: number = 0;

  @IsNumber()
  @IsNotEmpty({
    message: `
   0: channel 1-n
   1: channel 1-1
   2: incoming message request
   3: outgoing message request`,
  })
  @Min(0)
  @Max(3)
  typeChannel?: number = 0;
}
