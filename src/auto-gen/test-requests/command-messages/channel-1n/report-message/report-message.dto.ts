import { ErrorMessage, PretendingTo, ReportCategory } from "@enum/";
import { IsDefined, IsEnum, IsInvalid, IsNotEmpty, IsString, ValidIf, MinLength, MaxLength, IsULID } from "@decorators/";

export class ReportMessageDTO {
    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    workspaceId: string = '';

    @IsDefined({ message: `Could not resolve permission type` })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotEmpty({ message: `Could not resolve permission type` })
    @IsString({ message: `Could not resolve permission type` })
    channelId: string = '';

    @IsString()
    @IsNotEmpty()
    @IsULID()
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
