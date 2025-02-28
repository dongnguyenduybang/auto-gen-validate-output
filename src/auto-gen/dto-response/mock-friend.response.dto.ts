import { IsBoolean, IsArray, IsString } from 'class-validator';

export class MockFriendDTOResponse {
  @IsBoolean()
  ok: boolean;

  @IsArray()
  @IsString({ each: true }) 
  data: string[];
}