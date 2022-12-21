import { ConflictException, NotFoundException } from "@nestjs/common";
import { AuthorEntity } from "../entities/author.entity";
import { CreateAuthorDto } from "../use-cases/author/dto/create-author.dto";
import { UpdateAuthorDto } from "../use-cases/author/dto/update-author.dto";

export abstract class AuthorAbstractRepository {
    abstract findMany(): Promise<AuthorEntity[] | null>
    abstract findByEmail(email: string): Promise<AuthorEntity | null>
    abstract findById(id: string): Promise<AuthorEntity | NotFoundException>
    abstract create(data: CreateAuthorDto): Promise<void | ConflictException>
    abstract update(id: string, data: UpdateAuthorDto): Promise<void | NotFoundException>
    abstract remove(id: string): Promise<void | NotFoundException>
}