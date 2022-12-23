import { Inject } from "@nestjs/common";

import { PublicationAbstractRepository } from "../../../application/repositories/publication-abstract.repository";
import { CreatePublicationDto } from "./dto/create-publication.dto";

export class CreatePublicationService {
    constructor(
        @Inject("PublicationAbstractRepository")
        private readonly publicationRepository: PublicationAbstractRepository
    ) {}
    async execute(request: CreatePublicationDto){
        return await this.publicationRepository.create(request);
    }
}