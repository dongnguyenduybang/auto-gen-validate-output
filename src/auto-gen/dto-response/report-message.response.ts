import { IsBoolean } from '../decorator/dto-decorator';

export class ReportMessageResponse {
  @IsBoolean()
  ok: boolean;
}