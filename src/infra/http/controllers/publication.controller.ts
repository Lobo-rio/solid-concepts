import { 
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";

import { CreatePublicationService } from "../../../application/use-cases/publication/create-publication.service";
import { FindByIdPublicationService } from "../../../application/use-cases/publication/find-by-id-publication.service";
import { FindManyPublicationService } from "../../../application/use-cases/publication/find-many-publication.service";
import { RemovePublicationService } from "../../../application/use-cases/publication/remove-publication.service";
import { UpdatePublicationService } from "../../../application/use-cases/publication/update-publication.service";
import { FindByAuthorPublicationService } from "../../../application/use-cases/publication/find-by-author-publication.service";

import { CreatePublicationDto } from "../../../application/use-cases/publication/dto/create-publication.dto";
import { UpdatePublicationDto } from "../../../application/use-cases/publication/dto/update-publication.dto";

@Controller('app/v1/publication')
export class PublicationController {
    constructor(
        private readonly findManyService: FindManyPublicationService,
        private readonly findByIdService: FindByIdPublicationService,
        private readonly findByAuthorService: FindByAuthorPublicationService,
        private readonly createService: CreatePublicationService,
        private readonly updateService: UpdatePublicationService,
        private readonly removeService: RemovePublicationService,
    ) {}

    @Get()
    async findMany() {
        return await this.findManyService.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.findByIdService.execute(id);
    }

    @Get(':authorId/author')
    async findByAuthor(@Param('authorId') authorId: string) {
        return await this.findByAuthorService.execute(authorId);
    }

    @Post()
    async create(@Body() body: CreatePublicationDto) {
        return await this.createService.execute(body);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdatePublicationDto) {
        return await this.updateService.execute(id, body);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.removeService.execute(id);
    }
}