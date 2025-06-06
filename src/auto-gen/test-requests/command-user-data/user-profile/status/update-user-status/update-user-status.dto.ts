import { IsOptional, IsString, MaxLength, IsEmoji, IsNotEmpty, IsNotNull } from "../../../../../decorator/index";


export class UpdateUserStatusDTO {

    @IsOptional()
    @IsNotEmpty()
    @IsNotNull()
    @IsString()
    @MaxLength(50)
    content: string = ''

    @IsEmoji({ value: 1 })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @IsNotNull()
    status: string = ''

}
