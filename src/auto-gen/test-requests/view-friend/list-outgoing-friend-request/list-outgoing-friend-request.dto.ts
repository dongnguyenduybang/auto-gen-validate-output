import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    RangeNumber,
} from '../../../decorator';

export class ListOutgoingFriendRequestDTO {
    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    @RangeNumber(1, 500)
    limit: number = 0
}
