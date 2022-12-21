import { Module } from '@nestjs/common';

import { CreateAuthorService } from '../../application/use-cases/author/create-author.service';
import { FindByIdAuthorService } from '../../application/use-cases/author/find-by-id-author.service';
import { FindManyAuthorService } from '../../application/use-cases/author/find-many-author.service';
import { RemoveAuthorService } from '../../application/use-cases/author/remove-author.service';
import { UpdateAuthorService } from '../../application/use-cases/author/update-author.service';
import { DataBaseModule } from '../database/database.module';
import { AuthorController } from './controllers/author.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [AuthorController],
  providers: [
    CreateAuthorService,
    RemoveAuthorService,
    UpdateAuthorService,
    FindManyAuthorService,
    FindByIdAuthorService,
  ],
})
export class HttpModule {}