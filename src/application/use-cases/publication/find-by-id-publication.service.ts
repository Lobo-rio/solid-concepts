import { Inject, Injectable } from "@nestjs/common";
import { PublicationAbstractRepository } from "../../../application/repositories/publication-abstract.repository";

@Injectable()
export class FindByIdPublicationService {
    constructor(
        @Inject("PublicationAbstractRepository")
        private readonly publicationRepository: PublicationAbstractRepository
    ) {}
    async execute(id: string) {
        return await this.publicationRepository.findById(id);
    }
}