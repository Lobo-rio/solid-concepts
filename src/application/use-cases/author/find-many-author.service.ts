import { Injectable } from "@nestjs/common";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";
import { CreateAuthorDto } from "./dto/create-author.dto";

@Injectable()
export class FindManyAuthorService {
    constructor(
        private readonly authorRepository: AuthorAbstractRepository
    ) {}
    async execute() {
        return await this.authorRepository.findMany();
    }
}