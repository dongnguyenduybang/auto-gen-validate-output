import { IsDefined, IsString, IsNotEmpty, IsNumber, Min, Max, IsArray, IsBoolean } from 'class-validator';

export class MockUserDTOResponse {
  @IsDefined()
  @IsBoolean()
  ok: boolean;

  @IsDefined()
  @IsArray()
  data: Array<{
    userId: string;
    username: string;
    token: string;
    securityKey: string;
    recoverKey: string;
    badge: number;
  }>;
}