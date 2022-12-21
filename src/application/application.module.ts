import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorRepository } from '../infra/database/repositories/author.repository';
import { AuthorEntity } from './entities/author.entity';
import { CreateAuthorService } from './use-cases/author/create-author.service';
import { FindByIdAuthorService } from './use-cases/author/find-by-id-author.service';
import { FindManyAuthorService } from './use-cases/author/find-many-author.service';
import { RemoveAuthorService } from './use-cases/author/remove-author.service';
import { UpdateAuthorService } from './use-cases/author/update-author.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorEntity])
  ],
  controllers: [],
  providers: [
    {
        provide: "AuthorAbstractRepository",
        useClass: AuthorRepository,
    },
  ],
})
export class ApplicationModule {}