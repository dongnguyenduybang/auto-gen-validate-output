import { IsString, IsNotEmpty, IsNumber, IsDefined, IsOptional, Min, Max } from 'class-validator';

export class MockUserDTOResponse {
    
    @IsOptional()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    token: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    securityKey: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    recoverKey: string;

    @IsNumber()
    @Min(0)
    @Max(3)
    badge: number;
}