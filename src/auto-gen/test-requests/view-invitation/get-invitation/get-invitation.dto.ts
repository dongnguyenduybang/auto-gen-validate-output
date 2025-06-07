import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    MinLength,
} from '../../../decorator';

export class GetInvitationDTO {
    @IsString()
    @IsDefined()
    @IsNotNull()
    @IsNotEmpty()
    @MinLength(1)
    code: number = 0
}
