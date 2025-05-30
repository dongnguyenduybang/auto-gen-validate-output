
import { IsDefined, IsEnum, IsOptional, IsNotEmpty, IsString, MaxLength, IsEmoji, IsNotNull } from "../../decorator";
import { ExpireAfterTimeEnum } from "../../enums";

export class AddUserStatusDTO {

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsNotNull()
    @MaxLength(50)
    content: string = ''

    @IsEmoji({value: 1})
    @IsDefined()
    @IsOptional()
    @IsNotNull()
    status: string = ''

    @IsEnum(ExpireAfterTimeEnum)
    @IsDefined()
    @IsNotEmpty()
    @IsNotNull()
    expireAfterTime: ExpireAfterTimeEnum = 0
}
