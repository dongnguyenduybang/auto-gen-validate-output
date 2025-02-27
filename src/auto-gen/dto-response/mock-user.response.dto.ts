import { IsDefined, IsArray, IsBoolean } from '../decorator/dto-decorator';

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
