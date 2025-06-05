import { ErrorMessage, PretendingTo, ReportCategory } from "../../../../enums";
import { IsDefined, IsEnum, IsInvalid, IsNotEmpty, IsString, ValidIf, MinLength, MaxLength, GenEmoji } from "../../../../decorator";

export class ReportUserDTO {
    @IsString({
        message: ErrorMessage.COULD_NOT_PERMISSION,
    })
    @IsDefined({
        message: ErrorMessage.COULD_NOT_PERMISSION,
    })
    @IsNotEmpty({
        message: ErrorMessage.COULD_NOT_PERMISSION,
    })
    @IsInvalid({
        message: ErrorMessage.UNAUTHORIZED_REQUEST,
    })
    userId: string = '';

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
    @GenEmoji('🚀')
    reportReason: string = ''

    @ValidIf('reportCategory', '===', ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE, { optional: false })
    @IsEnum(PretendingTo)
    @IsDefined()
    pretendingTo: PretendingTo = 0
}
