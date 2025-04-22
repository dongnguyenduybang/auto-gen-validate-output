import { ReportCategory } from '../../enums/report-category.enum';
import { IsDefined, IsNotEmpty, IsULID, IsNotNull, IsChecked, IsOptional } from '../../decorator/general-decorator';
import {
  IsString,
  MaxLength,
  MinLength,
} from '../../decorator/string-decorator';
import { IsEnum } from '../../decorator/enum-decorator';
import { PretendingTo } from '../../enums/pretending-to.enum';

export class ReportMessageDTO {

  @IsDefined({ message: `Could not resolve permission type` })
  @IsChecked({ message: `Invalid channel` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  workspaceId: string = '';

  @IsDefined({ message: `Could not resolve permission type` })
  @IsChecked({ message: `Unsupported permission type` })
  @IsNotEmpty({ message: `Could not resolve permission type` })
  @IsString({ message: `Could not resolve permission type` })
  channelId: string = '';

  @IsString()
  @IsULID()
  @IsNotEmpty({message: `messageId must NOT have fewer than 1 characters`})
  @IsDefined()
  messageId: string = ''

  @IsDefined()
  @IsNotEmpty()
  @IsEnum(ReportCategory)
  reportCategory: ReportCategory = 0

  @IsDefined()
  @IsEnum(PretendingTo)
  pretendingTo: PretendingTo = 0

  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(255)
  reportReason: string = '';
}



