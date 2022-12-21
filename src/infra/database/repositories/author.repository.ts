import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateAuthorDto } from "../../../application/use-cases/author/dto/create-author.dto";
import { UpdateAuthorDto } from "../../../application/use-cases/author/dto/update-author.dto";
import { AuthorEntity } from "../../../application/entities/author.entity";
import { AuthorAbstractRepository } from "../../../application/repositories/author-abstract.repository";
@Injectable()
export class AuthorRepository implements AuthorAbstractRepository {
    constructor(
        @InjectRepository(AuthorEntity)
        private authorRepository: Repository<AuthorEntity>
    ) {}

    async findMany(): Promise<AuthorEntity[]> {
        return await this.authorRepository.find();
    }
    async findByEmail(email: string): Promise<AuthorEntity> {
        return await this.authorRepository.findOne({ where: { email } });
    }
    async findById(id: string): Promise<AuthorEntity | NotFoundException> {
        const author = await this.authorRepository.findOne({ where: { id } });
        if (!author) return new NotFoundException('Author not found!'); 
       
        return author;
    }
    async create(data: CreateAuthorDto): Promise<void | ConflictException> {
        const author = await this.findByEmail(data.email);

        if (author) return new ConflictException({ message: 'Author existed!' });

        await this.authorRepository.save(this.authorRepository.create(data));
    }
    async update(id: string, data: UpdateAuthorDto): Promise<void | NotFoundException> {
        const author = await this.authorRepository.findOne({ where: { id } });

        if (!author) return new NotFoundException({ message: 'author not found!' });
        
        this.authorRepository.merge(author, data);

        await this.authorRepository.save(author);
    }
    async remove(id: string): Promise<void | NotFoundException> {
        await this.findById(id);
        await this.authorRepository.softDelete(id);
    }
}