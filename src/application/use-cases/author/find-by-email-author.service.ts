import { Inject, Injectable } from "@nestjs/common";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";
import { CreateAuthorDto } from "./dto/create-author.dto";

@Injectable()
export class FindByEmailAuthorService {
    constructor(
        @Inject("AuthorAbstractRepository")
        private readonly authorRepository: AuthorAbstractRepository
    ) {}
    async execute(email: string) {
        return await this.authorRepository.findByEmail(email);
    }
}