import { Inject, Injectable } from "@nestjs/common";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";

@Injectable()
export class RemoveAuthorService {
    constructor(
        @Inject("AuthorAbstractRepository")
        private readonly authorRepository: AuthorAbstractRepository
    ) {}
    async execute(id: string) {
        return await this.authorRepository.remove(id);
    }
}