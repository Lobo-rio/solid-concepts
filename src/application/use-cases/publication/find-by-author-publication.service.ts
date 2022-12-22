import { Inject, Injectable } from "@nestjs/common";
import { PublicationAbstractRepository } from "../../../application/repositories/publication-abstract.repository";

@Injectable()
export class FindByAuthorPublicationService {
    constructor(
        @Inject("PublicationAbstractRepository")
        private readonly publicationRepository: PublicationAbstractRepository
    ) {}
    async execute(authorId: string) {
        return await this.publicationRepository.findByAuthor(authorId);
    }
}