import { AuthorEntity } from "../entities/author.entity";

export abstract class AuthorRepository {
    abstract findMany(): Promise<AuthorEntity[] | null>
    abstract findByEmail(): Promise<AuthorEntity | null>
    abstract findById(): Promise<AuthorEntity | null>
    abstract create(): Promise<void>
    abstract update(): Promise<void>
    abstract remove(): Promise<void>
}