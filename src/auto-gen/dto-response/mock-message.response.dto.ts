import { IsBoolean, IsArray, IsString } from 'class-validator';

export class MockMessageDTOResponse {
  @IsBoolean()
  ok: boolean;

  @IsArray()
  @IsString({ each: true }) 
  data: string[];
}