import { IsBoolean, IsArray } from '../decorator/dto-decorator';

export class DeleteMessageForEveryoneResponse{
  @IsBoolean()
  ok: boolean;

  @IsArray()
  data: string[];
}