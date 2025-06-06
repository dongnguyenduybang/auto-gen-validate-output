import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    MaxLength,
    IsULID,
} from '../../../../decorator/index';

export class RingBackToneRenameDTO {

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsNotNull()
    @MaxLength(50)
    name: string = '';

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsULID()
    ringbackToneId: string = ''
}
