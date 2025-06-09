import { ErrorMessage } from '../../../enums';
import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    IsInvalid,
    Max,
    IsNumber,
    Min,
    IsOptional,
} from '../../../decorator';

export class SearchMembersDTO {

    @IsDefined({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    workspaceId: string = '';

    @IsDefined({ message: ErrorMessage.UNSUPPORTED_PERMISSION_TYPE })
    @IsInvalid({ message: ErrorMessage.INVALID_CHANNEL })
    @IsNotNull({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsNotEmpty({ message: ErrorMessage.COULD_NOT_PERMISSION })
    @IsString({ message: ErrorMessage.COULD_NOT_PERMISSION })
    channelId: string = '';

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
