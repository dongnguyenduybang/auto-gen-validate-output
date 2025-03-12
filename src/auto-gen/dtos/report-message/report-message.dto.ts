import { ReportCategory } from '../../enums/report-category.enum';
import {
  IsNotEmpty,
  IsString,
  IsDefined,
  IsEnum,
} from '../../decorator/dto-decorator';
import { PretendingTo } from '../../enums/pretending-to.enum';

export class ReportMessageDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  workspaceId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  channelId: string = '';

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  messageId: string = '';

  @IsNotEmpty()
  @IsDefined()
  @IsEnum(ReportCategory)
  reportCategory: ReportCategory = 0

  @IsNotEmpty()
  @IsDefined()
  @IsEnum(PretendingTo)
  pretendingTo: PretendingTo = 0

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  reportReason: string = '';

}
