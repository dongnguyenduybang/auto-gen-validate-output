import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    RangeNumber,
} from '../../../decorator';

export class ListBlockUserDTO {
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    @RangeNumber(1, 500)
    limit: number = 0
}
