import { Inject, Injectable } from "@nestjs/common";
import { PublicationAbstractRepository } from "../../../application/repositories/publication-abstract.repository";

@Injectable()
export class FindManyPublicationService {
    constructor(
        @Inject("PublicationAbstractRepository")
        private readonly publicationRepository: PublicationAbstractRepository
    ) {}
    async execute() {
        return await this.publicationRepository.findMany();
    }
}