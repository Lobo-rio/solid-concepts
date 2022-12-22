import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateAuthorDto {
    
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    sector: string;

    @IsNotEmpty()
    @ApiProperty()
    pathImage?: string;
}

enum CompanySector {
    ADM = "Administração",
    TEC = "Tecnologia",
    RH = "Recursos Humano",
    MK = "Marketing"
}