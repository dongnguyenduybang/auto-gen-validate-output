import { IsBoolean, IsArray } from '../decorator/dto-decorator';

export class MarkAsReadResponse {
  @IsBoolean()
  ok: boolean;

  @IsArray()
  data: string[];
}