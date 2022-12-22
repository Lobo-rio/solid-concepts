import { Inject, Injectable } from "@nestjs/common";
import { PublicationAbstractRepository } from "src/application/repositories/publication-abstract.repository";
import { AuthorAbstractRepository } from "../../repositories/author-abstract.repository";

@Injectable()
export class RemovePublicationService {
    constructor(
        @Inject("PublicationAbstractRepository")
        private readonly publicationRepository: PublicationAbstractRepository
    ) {}
    async execute(id: string) {
        return await this.publicationRepository.remove(id);
    }
}