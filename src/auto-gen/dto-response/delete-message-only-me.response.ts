import { IsBoolean, IsArray } from '../decorator/dto-decorator';

export class DeleteMessageOnlyMeResponse{
  @IsBoolean()
  ok: boolean;

  @IsArray()
  data: string[];
}