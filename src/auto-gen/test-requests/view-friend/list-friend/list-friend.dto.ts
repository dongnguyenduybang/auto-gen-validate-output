import { ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsNotNull,
    IsNumber,
    Max,
    Min,
} from '../../../decorator';

export class ListFriendDTO {

    @IsNumber()
    @IsDefined()
    @IsNotNull()
    @IsNotEmpty()
    @Min(1)
    @Max(500)
    limit: number = 0
}
