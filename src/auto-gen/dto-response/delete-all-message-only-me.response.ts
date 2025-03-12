import { IsBoolean, IsArray } from '../decorator/dto-decorator';

export class DeleteAllMessageOnlyMeResponse{
  @IsBoolean()
  ok: boolean;

  @IsArray()
  data: string[];
}