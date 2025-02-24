import { IsBoolean, IsArray } from 'class-validator';

export class MockMessageDTOResponse {
  @IsBoolean()
  ok?: boolean;

  @IsArray()
  data: string[];
}
