
import 'reflect-metadata';
import {IsNotEmpty, IsNotNull, IsNumber, IsString, Max, Min } from '../decorator/dto-decorator';

export class MockUserDTO {

  @IsString()
  @IsNotEmpty()
  @IsNotNull()
  prefix?: string = 'duy12345';

  @IsNumber()
  @IsNotEmpty()
  @IsNotNull()
  quantity?: number = 1;

  @IsNumber()
  @IsNotEmpty()
  @IsNotNull()
  @Min(0)
  @Max(3)
  badge?: number = 0;
}