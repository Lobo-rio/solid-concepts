import { ConflictException, NotFoundException } from "@nestjs/common";

import { PublicationEntity } from "../../infra/database/entities/publication.entity";
import { CreatePublicationDto } from "../use-cases/publication/dto/create-publication.dto";
import { UpdatePublicationDto } from "../use-cases/publication/dto/update-publication.dto";

export abstract class PublicationAbstractRepository {
    abstract findMany(): Promise<PublicationEntity[]>
    abstract findByAuthor(authorId: string): Promise<PublicationEntity[] | NotFoundException>
    abstract findById(id: string): Promise<PublicationEntity | NotFoundException>
    abstract create(data: CreatePublicationDto): Promise<void | ConflictException>
    abstract update(id: string, data: UpdatePublicationDto): Promise<void | NotFoundException>
    abstract remove(id: string): Promise<void | NotFoundException>
}