import { ValidateNested } from 'class-validator';
import {  IsBoolean, IsString, IsNumber, IsDefined, IsArray } from '../decorator/dto-decorator';
import { Type } from 'class-transformer';
export class MockUserData {
  @IsNumber()
  @IsDefined()
  userId: number;

  @IsString()
  @IsDefined()
  username: string;

  @IsString()
  @IsDefined()
  token: string;

  @IsString()
  @IsDefined()
  securityKey: string;

  @IsString()
  @IsDefined()
  recoverKey: string;

  @IsNumber()
  @IsDefined()
  badge: number;
}

export class MockUserResponse  {
  @IsBoolean()
  @IsDefined()
  ok?: boolean = undefined;
  
  @ValidateNested({ each: true })
  @IsArray()
  @IsDefined()
  @Type(() => MockUserData)
  data: MockUserData[];
}