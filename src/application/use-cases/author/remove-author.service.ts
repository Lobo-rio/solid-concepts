import { Injectable } from "@nestjs/common";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";

@Injectable()
export class RemoveAuthorService {
    constructor(
        private readonly authorRepository: AuthorAbstractRepository
    ) {}
    async execute(id: string) {
        return await this.authorRepository.remove(id);
    }
}