import { IsBoolean, IsArray } from '../decorator/dto-decorator';

export class MockMessageResponse {
  @IsBoolean()
  ok: boolean;

  @IsArray()
  data: string[];
}