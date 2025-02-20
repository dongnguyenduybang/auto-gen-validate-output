import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsDefined,
    Min,
    Max,
    IsBoolean,
    IsArray,
  } from 'class-validator';
  
  export class MockMessageDTOResponse {
    
    @IsBoolean()
    ok?: boolean

    @IsArray()
    data: string[]; 
  }
  