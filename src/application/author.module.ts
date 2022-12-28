import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorController } from '../infra/http/controllers/author.controller';
import { AuthorRepository } from '../infra/database/repositories/author.repository';
import { CreateAuthorService } from './use-cases/author/create-author.service';
import { FindByIdAuthorService } from './use-cases/author/find-by-id-author.service';
import { FindManyAuthorService } from './use-cases/author/find-many-author.service';
import { RemoveAuthorService } from './use-cases/author/remove-author.service';
import { UpdateAuthorService } from './use-cases/author/update-author.service';
import { AuthorEntity } from '../infra/database/entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorEntity])
  ],
  controllers: [AuthorController],
  providers: [
    CreateAuthorService,
    RemoveAuthorService,
    UpdateAuthorService,
    FindManyAuthorService,
    FindByIdAuthorService,
    {
      provide: "AuthorAbstractRepository",
      useClass: AuthorRepository,
    }
  ],
  exports: [
    CreateAuthorService,
    RemoveAuthorService,
    UpdateAuthorService,
    FindManyAuthorService,
    FindByIdAuthorService,
  ],
})
export class AuthorModule {}