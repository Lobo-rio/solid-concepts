import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePublicationDto {
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @ApiProperty()
    subTitle?: string;

    @IsNotEmpty()
    @ApiProperty()
    companySector: string;

    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @ApiProperty()
    linkImage?: string;

    @IsNotEmpty()
    @ApiProperty()
    authorId: string; 
}