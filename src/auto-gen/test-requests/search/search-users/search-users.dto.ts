import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    Max,
    IsNumber,
    Min,
    IsOptional,
} from '../../../decorator';

export class SearchUsersDTO {

    @IsNotEmpty()
    @IsNotNull()
    @IsDefined()
    @IsString()
    keyword: string = '';

    @IsNumber()
    @IsDefined()
    @IsNotNull()
    @IsNotEmpty()
    @IsOptional()
    @Min(1)
    @Max(500)
    limit: number = 0
}
