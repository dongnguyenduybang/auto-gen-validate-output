import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    RangeNumber,
} from '../../../decorator';

export class ListFriendDTO {
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    @RangeNumber(1, 500)
    limit: number = 0
}
