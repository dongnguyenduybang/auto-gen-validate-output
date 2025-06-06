import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    isValidURL,
    MaxLength,
} from '../../../../decorator/index';

export class RingBackToneCreateDTO {

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsNotNull()
    @MaxLength(50)
    name: string = '';

    @IsDefined()
    @IsString()
    @isValidURL()
    @IsNotEmpty()
    @IsNotNull()
    ringbackTonePath: string = ''
}
