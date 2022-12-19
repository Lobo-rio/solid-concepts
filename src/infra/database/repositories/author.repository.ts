import { AuthorEntity } from "../../../application/entities/author.entity";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";

export class AuthorRepository implements AuthorAbstractRepository {
    findMany(): Promise<AuthorEntity[]> {
        throw new Error("Method not implemented.");
    }
    findByEmail(): Promise<AuthorEntity> {
        throw new Error("Method not implemented.");
    }
    findById(): Promise<AuthorEntity> {
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