import { TypeChannelEnum } from '../../enums/type-channel.enum';
import {
  IsNotEmpty,
  IsNotNull,
  MinLength,
  IsNumber,
  IsString,
  Max,
  Min,
  IsEnum,
  IsIn,
} from '../../decorator/dto-decorator';

export class MockChannelDTO {
  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  @MinLength(5)
  prefix?: string = '';

  @IsNumber()
  @IsNotEmpty()
  @IsNotNull()
  @Min(1)
  @Max(100)
  quantity?: number = 0;

  @IsNumber()
  @IsNotEmpty()
  @IsNotNull()
  @Min(0)
  @Max(1000)
  totalMessages?: number = 0;

  @IsNumber()
  @IsNotEmpty()
  @IsNotNull()
  @Min(0)
  @Max(3)
  @IsIn([0, 1, 2, 3])
  typeChannel?: number = 0;
}