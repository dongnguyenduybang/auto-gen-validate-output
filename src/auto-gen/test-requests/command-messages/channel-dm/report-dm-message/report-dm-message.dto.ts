
import { ErrorMessage, PretendingTo, ReportCategory } from "@enum/";
import { IsDefined, IsEnum, IsInvalid, IsNotEmpty, IsString, ValidIf, MinLength, MaxLength, IsULID, IsNotNull } from "@decorators/";

export class ReportDmMessageDTO {
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.UNAUTHORIZED_REQUEST })
    userId: string = '';

    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsULID()
    @IsDefined()
    messageId: string = '';

    @IsEnum(ReportCategory)
    @IsDefined()
    @IsNotNull()
    @IsNotEmpty()
    reportCategory: ReportCategory = 0

    @ValidIf('reportCategory', '===', ReportCategory.REPORT_CATEGORY_OTHER, { optional: false })
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @MinLength(1)
    @MaxLength(255)
    reportReason: string = ''

    @ValidIf('reportCategory', '===', ReportCategory.REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE, { optional: false })
    @IsEnum(PretendingTo)
    @IsDefined()
    @IsNotNull()
    pretendingTo: PretendingTo = 0
}
