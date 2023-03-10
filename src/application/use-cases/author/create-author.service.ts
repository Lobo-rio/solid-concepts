import { Inject, Injectable } from "@nestjs/common";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";
import { CreateAuthorDto } from "./dto/create-author.dto";

@Injectable()
export class CreateAuthorService {
    constructor(
        @Inject("AuthorAbstractRepository")
        private readonly authorRepository: AuthorAbstractRepository
    ) {}
    async execute(request: CreateAuthorDto) {
        return await this.authorRepository.create(request);
    }
}