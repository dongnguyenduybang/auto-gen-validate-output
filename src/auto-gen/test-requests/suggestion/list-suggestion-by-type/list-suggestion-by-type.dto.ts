import { SuggestionTypeEnum } from '../../../enums/suggestion-type';
import {
    IsDefined,
    IsNotEmpty,
    IsNotNull,
    IsEnum,
    IsNumber,
    IsOptional,
    Max,
    Min,
} from '../../../decorator';

export class ListSuggestionByTypeDTO {

    @IsEnum(SuggestionTypeEnum)
    @IsNotEmpty()
    @IsDefined()
    @IsNotNull()
    suggestionType: SuggestionTypeEnum = 0;

    @IsNumber()
    @IsDefined()
    @IsNotNull()
    @IsNotEmpty()
    @IsOptional()
    @Min(1)
    @Max(500)
    limit: number = 0
}
