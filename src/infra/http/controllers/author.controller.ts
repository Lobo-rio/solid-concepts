import { 
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";

import { CreateAuthorDto } from "../../../application/use-cases/author/dto/create-author.dto";
import { UpdateAuthorDto } from "../../../application/use-cases/author/dto/update-author.dto";
import { CreateAuthorService } from "../../../application/use-cases/author/create-author.service";
import { FindByIdAuthorService } from "../../../application/use-cases/author/find-by-id-author.service";
import { FindManyAuthorService } from "../../../application/use-cases/author/find-many-author.service";
import { RemoveAuthorService } from "../../../application/use-cases/author/remove-author.service";
import { UpdateAuthorService } from "../../../application/use-cases/author/update-author.service";

@Controller('app/v1/author')
export class AuthorController {
    constructor(
        private readonly findManyService: FindManyAuthorService,
        private readonly findByIdService: FindByIdAuthorService,
        private readonly createService: CreateAuthorService,
        private readonly updateService: UpdateAuthorService,
        private readonly removeService: RemoveAuthorService,
    ) {}

    @Get()
    async findMany() {
        return await this.findManyService.execute();
    }

    @Get(':id')
    async findById(@Param() id: string) {
        return await this.findByIdService.execute(id);
    }

    @Post()
    async create(@Body() body: CreateAuthorDto) {
        return await this.createService.execute(body);
    }

    @Put(':id')
    async update(@Param() id: string, @Body() body: UpdateAuthorDto) {
        return await this.updateService.execute(id, body);
    }

    @Delete(':id')
    async remove(@Param() id: string) {
        return await this.removeService.execute(id);
    }
}