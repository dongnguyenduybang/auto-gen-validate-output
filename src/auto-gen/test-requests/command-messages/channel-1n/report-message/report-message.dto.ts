import { ErrorMessage, PretendingTo, ReportCategory } from "../../../../enums/index";
import { IsDefined, IsEnum, IsInvalid, IsNotEmpty, IsString, ValidIf, MinLength, MaxLength, IsULID, IsNotNull } from "../../../../decorator/index";

export class ReportMessageDTO {
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    workspaceId: string = '';

    @IsDefined({ message: ErrorMessage.UNSUPPORTED_PERMISSION_TYPE })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    channelId: string = '';

    @IsString()
    @IsULID()
    @IsNotEmpty()
    @IsNotNull()
    @IsDefined()
    messageId: string = '';

    @IsEnum(ReportCategory)
    @IsDefined()
    @IsNotEmpty()
    reportCategory: ReportCategory = 0

    @ValidIf('reportCategory', '===', ReportCategory.REPORT_CATEGORY_OTHER, { optional: false })
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    reportReason: string = ''

    @ValidIf('reportCategory', '===', ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE, { optional: false })
    @IsEnum(PretendingTo)
    @IsDefined()
    pretendingTo: PretendingTo = 0
}
