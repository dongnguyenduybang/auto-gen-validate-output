import { IsBoolean, IsArray } from '../decorator/dto-decorator';

export class MarkAllChannelAsReadResponse {
  @IsBoolean()
  ok: boolean;

  @IsArray()
  data: string[];
}