import { 
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { BadRequestSwagger } from ".././../../helpers/swagger/bad-request.swagger";
import { NotFoundSwagger } from ".././../../helpers/swagger/not-found.swagger";
import { ConflictExceptionSwagger } from ".././../../helpers/swagger/conflict-exception.swagger";

import { CreatePublicationService } from "../../../application/use-cases/publication/create-publication.service";
import { FindByIdPublicationService } from "../../../application/use-cases/publication/find-by-id-publication.service";
import { FindManyPublicationService } from "../../../application/use-cases/publication/find-many-publication.service";
import { RemovePublicationService } from "../../../application/use-cases/publication/remove-publication.service";
import { UpdatePublicationService } from "../../../application/use-cases/publication/update-publication.service";
import { FindByAuthorPublicationService } from "../../../application/use-cases/publication/find-by-author-publication.service";

import { CreatePublicationDto } from "../../../application/use-cases/publication/dto/create-publication.dto";
import { UpdatePublicationDto } from "../../../application/use-cases/publication/dto/update-publication.dto";

import { IndexPublicationSwagger } from "./swagger/publication/index-publication.swagger";
import { CreatePublicationSwagger } from "./swagger/publication/create-publication.swagger";
import { UpdatePublicationSwagger } from "./swagger/publication/update-publication.swagger";
import { ShowPublicationSwagger } from "./swagger/publication/show-publication.swagger";


@Controller('app/v1/publication')
@ApiTags('Publication')
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
    @ApiOperation({ summary: 'List Publication' })
    @ApiResponse({ 
        status:  200, 
        description: 'List of publications returned successfully',
        type: ShowPublicationSwagger,
        isArray: true,
    })
    async findMany() {
        return await this.findManyService.execute();
    }

    @Get(':id')
    @ApiOperation({ summary: 'List a single publication' })
    @ApiResponse({ 
        status:  200, 
        description: 'Returned single publication successfully',
        type: IndexPublicationSwagger,
        isArray: false, 
    })
    @ApiResponse({ 
        status:  400, 
        description: 'Invalid parameters',
        type: BadRequestSwagger,
    })
    @ApiResponse({ 
        status: 404,
        description: 'Publication not found',
        type: NotFoundSwagger,
    })
    async findById(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.findByIdService.execute(id);
    }

    @Get(':authorId/author')
    @ApiOperation({ summary: 'List a single publication for author' })
    @ApiResponse({ 
        status:  200, 
        description: 'Returned single publication for author successfully',
        type: ShowPublicationSwagger,
        isArray: false, 
    })
    @ApiResponse({ 
        status:  400, 
        description: 'Invalid parameters',
        type: BadRequestSwagger,
    })
    @ApiResponse({ 
        status: 404,
        description: 'Publication not found',
        type: NotFoundSwagger,
    })
    async findByAuthor(@Param('authorId', new ParseUUIDPipe()) authorId: string) {
        return await this.findByAuthorService.execute(authorId);
    }

    @Post()
    @ApiOperation({ summary: 'Create publication' })
    @ApiResponse({ 
        status:  201, 
        description: 'New publication successfully created',
        type: CreatePublicationSwagger,
    })
    @ApiResponse({ 
        status:  400, 
        description: 'Invalid parameters',
        type: BadRequestSwagger, 
    })
    @ApiResponse({ 
        status:  409, 
        description: 'ConflictException',
        type: ConflictExceptionSwagger, 
    })
    async create(@Body() body: CreatePublicationDto) {
        return await this.createService.execute(body);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update publication' })
    @ApiResponse({ 
        status:  200, 
        description: 'Publication updated successfully',
        type: UpdatePublicationSwagger,
    })
    @ApiResponse({ 
        status:  400, 
        description: 'Invalid parameters',
        type: BadRequestSwagger,
    })
    @ApiResponse({ 
        status: 404,
        description: 'Publication not found',
        type: NotFoundSwagger,
    })
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdatePublicationDto) {
        return await this.updateService.execute(id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete publication' })
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ 
        status:  204, 
        description: 'Publication removed successfully' 
    })
    @ApiResponse({ 
        status:  400, 
        description: 'Invalid parameters',
        type: BadRequestSwagger,
    })
    @ApiResponse({ 
        status: 404,
        description: 'Publication not found',
        type: NotFoundSwagger,
    })
    async remove(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.removeService.execute(id);
    }
}