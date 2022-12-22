import { Inject, Injectable } from "@nestjs/common";
import { PublicationAbstractRepository } from "../../../application/repositories/publication-abstract.repository";
import { UpdatePublicationDto } from "./dto/update-publication.dto";

@Injectable()
export class UpdatePublicationService {
    constructor(
        @Inject("PublicationAbstractRepository")
        private readonly publicationRepository: PublicationAbstractRepository
    ) {}
    async execute(id: string, request: UpdatePublicationDto) {
        return await this.publicationRepository.update(id, request);
    }
}