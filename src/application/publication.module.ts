import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PublicationController } from '../infra/http/controllers/publication.controller';
import { PublicationRepository } from '../infra/database/repositories/publication.repository';
import { PublicationEntity } from './entities/publication.entity';
import { CreatePublicationService } from './use-cases/publication/create-publication.service';
import { FindByIdPublicationService } from './use-cases/publication/find-by-id-publication.service';
import { FindManyPublicationService } from './use-cases/publication/find-many-publication.service';
import { RemovePublicationService } from './use-cases/publication/remove-publication.service';
import { UpdatePublicationService } from './use-cases/publication/update-publication.service';
import { AuthorEntity } from './entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthorEntity,
      PublicationEntity,
    ])
  ],
  controllers: [PublicationController],
  providers: [
    CreatePublicationService,
    RemovePublicationService,
    UpdatePublicationService,
    FindManyPublicationService,
    FindByIdPublicationService,
    {
      provide: "PublicationAbstractRepository",
      useClass: PublicationRepository,
    }
  ],
  exports: [
    CreatePublicationService,
    RemovePublicationService,
    UpdatePublicationService,
    FindManyPublicationService,
    FindByIdPublicationService,
  ],
})
export class PublicationModule {}