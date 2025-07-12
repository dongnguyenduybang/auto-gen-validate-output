import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsNotNull,
    isValidURL,
    MaxLength,
    MinLength,
} from '../../../../decorator/index';

export class RingBackToneCreateDTO {

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsNotNull()
    @MinLength(3)
    @MaxLength(50)
    name: string = '';

    @IsDefined()
    @IsString()
    @isValidURL()
    @IsNotEmpty()
    @IsNotNull()
    ringbackTonePath: string = ''
}
