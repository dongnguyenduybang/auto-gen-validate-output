import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    RangeNumber,
} from '../../../decorator';

export class ListDmChannelDTO {
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    @RangeNumber(1, 500)
    limit: number = 0
}
