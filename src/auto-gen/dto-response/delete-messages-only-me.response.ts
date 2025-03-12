import { IsBoolean, IsArray } from '../decorator/dto-decorator';

export class DeleteMessagesOnlyMeResponse{
  @IsBoolean()
  ok: boolean;

  @IsArray()
  data: string[];
}