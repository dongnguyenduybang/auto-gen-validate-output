
import 'reflect-metadata';
import { IsAny, IsArray, IsBoolean, IsDate, IsNotEmpty, IsNotNull, IsNumber, IsOptional, IsString, MaxArray, MaxLength, Min, MinArray, MinLength } from './decorator/dto-decorator';


export class CreateUserDTO {

    @MaxLength(255)
    @MinLength(1)
    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    username: string = 'duy';

    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    @IsNotEmpty()
    @IsNotNull()
    address?: string = 'can tho';

    // @IsOptional()
    // @IsDate()
    // @IsNotEmpty()
    // @IsNotNul()
    // birthday?: Date = undefined;

    // @Min(1)
    // @Min(100)
    // @IsOptional()
    // @IsNumber()
    // @IsNotEmpty()
    // @IsNotNul()
    // age?: number = undefined;

    // @IsOptional()
    // @IsBoolean()
    // @IsNotEmpty()
    // @IsNotNul()
    // isActive?: boolean = undefined;

    // @IsOptional()
    // @IsAny()
    // typeAny?: any = undefined;

    // @IsOptional()
    // @IsArray()
    // @MaxArray(10)
    // @MinArray(1)
    // @IsNotEmpty()
    // @IsNotNul()
    // tags?: string[] = undefined;
}

