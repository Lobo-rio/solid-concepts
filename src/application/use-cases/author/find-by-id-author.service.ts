import { Injectable } from "@nestjs/common";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";
import { CreateAuthorDto } from "./dto/create-author.dto";

@Injectable()
export class FindByIdAuthorService {
    constructor(
        private readonly authorRepository: AuthorAbstractRepository
    ) {}
    async execute(id: string) {
        return await this.authorRepository.findById(id);
    }
}