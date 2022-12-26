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

import { CreateAuthorService } from "../../../application/use-cases/author/create-author.service";
import { FindByIdAuthorService } from "../../../application/use-cases/author/find-by-id-author.service";
import { FindManyAuthorService } from "../../../application/use-cases/author/find-many-author.service";
import { RemoveAuthorService } from "../../../application/use-cases/author/remove-author.service";
import { UpdateAuthorService } from "../../../application/use-cases/author/update-author.service";

import { CreateAuthorDto } from "../../../application/use-cases/author/dto/create-author.dto";
import { UpdateAuthorDto } from "../../../application/use-cases/author/dto/update-author.dto";

import { IndexAuthorSwagger } from "./swagger/author/index-author.swagger";
import { CreateAuthorSwagger } from "./swagger/author/create-author.swagger";
import { UpdateAuthorSwagger } from "./swagger/author/update-author.swagger";
import { ShowAuthorSwagger } from "./swagger/author/show-author.swagger";


@Controller('app/v1/author')
@ApiTags('Author')
export class AuthorController {
    constructor(
        private readonly findManyService: FindManyAuthorService,
        private readonly findByIdService: FindByIdAuthorService,
        private readonly createService: CreateAuthorService,
        private readonly updateService: UpdateAuthorService,
        private readonly removeService: RemoveAuthorService,
    ) {}

    @Get()
    @ApiOperation({ summary: 'List author' })
    @ApiResponse({ 
        status:  200, 
        description: 'List of authors returned successfully',
        type: ShowAuthorSwagger,
        isArray: true,
    })
    async findMany() {
        return await this.findManyService.execute();
    }

    @Get(':id')
    @ApiOperation({ summary: 'List a single author' })
    @ApiResponse({ 
        status:  200, 
        description: 'Returned single author successfully',
        type: IndexAuthorSwagger,
        isArray: false, 
    })
    @ApiResponse({ 
        status:  400, 
        description: 'Invalid parameters',
        type: BadRequestSwagger,
    })
    @ApiResponse({ 
        status: 404,
        description: 'Author not found',
        type: NotFoundSwagger,
    })
    async findById(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.findByIdService.execute(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create author' })
    @ApiResponse({ 
        status:  201, 
        description: 'New author successfully created',
        type: CreateAuthorSwagger,
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
    async create(@Body() body: CreateAuthorDto) {
        return await this.createService.execute(body);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update author' })
    @ApiResponse({ 
        status:  200, 
        description: 'Author updated successfully',
        type: UpdateAuthorSwagger,
    })
    @ApiResponse({ 
        status:  400, 
        description: 'Invalid parameters',
        type: BadRequestSwagger,
    })
    @ApiResponse({ 
        status: 404,
        description: 'Author not found',
        type: NotFoundSwagger,
    })
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdateAuthorDto) {
        return await this.updateService.execute(id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete author' })
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiResponse({ 
        status:  204, 
        description: 'Author removed successfully' 
    })
    @ApiResponse({ 
        status:  400, 
        description: 'Invalid parameters',
        type: BadRequestSwagger,
    })
    @ApiResponse({ 
        status: 404,
        description: 'Author not found',
        type: NotFoundSwagger,
    })
    async remove(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.removeService.execute(id);
    }
}