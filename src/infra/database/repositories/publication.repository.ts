import { PublicationEntity } from "../../../application/entities/publication.entity";
import { PublicationAbstractRepository } from "../../../application/repositories/publication-abstract.repository";

export class PublicationRepository implements PublicationAbstractRepository {
    findMany(): Promise<PublicationEntity[]> {
        throw new Error("Method not implemented.");
    }
    findByEmail(): Promise<PublicationEntity> {
        throw new Error("Method not implemented.");
    }
    findById(): Promise<PublicationEntity> {
        throw new Error("Method not implemented.");
    }
    create(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    remove(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}