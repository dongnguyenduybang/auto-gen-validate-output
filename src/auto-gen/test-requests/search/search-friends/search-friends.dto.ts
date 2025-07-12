import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
} from '../../../decorator';

export class SearchFriendsDTO {
    @IsNotEmpty()
    @IsNotNull()
    @IsDefined()
    @IsString()
    keyword: string = '';
}
