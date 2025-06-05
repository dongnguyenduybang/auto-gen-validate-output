import { IsOptional, IsString, MaxLength, IsEmoji } from "../../../../../decorator/index";


export class UpdateUserStatusDTO {

    @IsOptional()
    @IsString()
    @MaxLength(50)
    content: string = ''

    @IsEmoji({ value: 1 })
    @IsString()
    @IsOptional()
    status: string = ''

}
