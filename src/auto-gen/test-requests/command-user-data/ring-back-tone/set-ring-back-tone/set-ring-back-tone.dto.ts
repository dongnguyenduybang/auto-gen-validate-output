import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    IsULID,
} from '../../../../decorator/index';

export class SetRingBackToneDTO {

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    @IsULID()
    ringbackToneId: string = ''
}
