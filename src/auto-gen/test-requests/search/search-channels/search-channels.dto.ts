import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
} from '../../../decorator';

export class SearchChannelsDTO {
    @IsNotEmpty()
    @IsNotNull()
    @IsDefined()
    @IsString()
    keyword: string = '';
}
