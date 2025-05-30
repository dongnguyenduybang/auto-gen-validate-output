
import { PretendingTo, ReportCategory } from "../../enums";
import { IsDefined, IsEnum,IsOptional, IsInvalid, IsNotEmpty, IsString } from "../../decorator";

export class ReportUserDTO {
    @IsString({
        message: `Could not resolve permission type`,
    })
    @IsDefined({
        message: `Could not resolve permission type`,
    })
    @IsNotEmpty({
        message: `Could not resolve permission type`,
    })
    @IsInvalid({
        message: `Unauthorized request`,
    })
    userId: string = '';

    @IsEnum(ReportCategory)
    @IsDefined()
    reportCategory: ReportCategory = 0

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    reportReason: string = ''

    @IsOptional()
    @IsEnum(PretendingTo)
    pretendingTo: PretendingTo = 0
}
