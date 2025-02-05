
import 'reflect-metadata';
import { IsAny, IsEnum, IsObject, IsArray, IsBoolean, IsDate, IsNotEmpty, IsNotNull, IsNumber, IsOptional, IsString, MaxArray, MaxLength, Min, MinArray, MinLength } from './decorator/dto-decorator';
import { UserRole } from './enums/user-role.enum';


export class CreateUserDTO {

    // @IsOptional()
    // @MaxLength(255)
    // @MinLength(1)
    // @IsString()
    // @IsNotEmpty()
    // @IsNotNull()
    // username?: string = 'duy'

    // @IsOptional()
    // @IsString()
    // @MinLength(1)
    // @MaxLength(255)
    // @IsNotEmpty()
    // @IsNotNull()
    // address?: string = 'can tho'

    // @IsOptional()
    // @IsDate()
    // @IsNotEmpty()
    // @IsNotNull()
    // birthday?: Date = new Date()

    // @Min(1)
    // @Min(100)
    // @IsOptional()
    // @IsNumber()
    // @IsNotEmpty()
    // @IsNotNull()
    // age?: number = 10;

    // @IsOptional()
    // @IsBoolean()
    // @IsNotEmpty()
    // @IsNotNull()
    // isActive?: boolean = true;

    // @IsOptional()
    // @IsObject()
    // @IsNotEmpty()
    // @IsNotNull()
    // isObject?: object = { key: 'value' }
    

    // @IsOptional()
    // @IsAny()
    // typeAny?: any = true;

    @IsOptional()
    @IsArray()
    @MaxArray(10)
    @MinArray(1)
    @IsNotEmpty()
    @IsNotNull()
    tags?: string[] = ['a','b'];

    @IsEnum()
    @IsNotNull()
    @IsNotEmpty()
    role: UserRole = UserRole.USER
}

