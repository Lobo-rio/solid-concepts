import { PublicationEntity } from "../entities/publication.entity";

export abstract class PublicationAbstractRepository {
    abstract findMany(): Promise<PublicationEntity[] | null>
    abstract findByEmail(): Promise<PublicationEntity | null>
    abstract findById(): Promise<PublicationEntity | null>
    abstract create(): Promise<void>
    abstract update(): Promise<void>
    abstract remove(): Promise<void>
}