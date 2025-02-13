
import 'reflect-metadata';
import { IsAny, IsEnum, IsObject, IsArray, IsBoolean, IsDate, IsNotEmpty, IsNotNull, IsNumber, IsOptional, IsString, MaxArray, MaxLength, Min, MinArray, MinLength, Max } from '../decorator/dto-decorator';



export class MockUserDTO {

    @IsString()
    @IsNotEmpty()
    @IsNotNull()
    prefix?: string = 'duy12345'


    @IsNumber()
    @IsNotEmpty()
    @IsNotNull()
    quantity?: number = 1;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    @IsNotNull()
    badge?: number = 0;
}

