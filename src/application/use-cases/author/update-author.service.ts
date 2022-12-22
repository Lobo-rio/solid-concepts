import { Inject, Injectable } from "@nestjs/common";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Injectable()
export class UpdateAuthorService {
    constructor(
        @Inject("AuthorAbstractRepository")
        private readonly authorRepository: AuthorAbstractRepository
    ) {}
    async execute(id: string, request: UpdateAuthorDto) {
        return await this.authorRepository.update(id, request);
    }
}