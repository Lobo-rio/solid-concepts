import { NotFoundException, ConflictException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { AuthorEntity } from "../../../application/entities/author.entity";
import { CreatePublicationDto } from "../../../application/use-cases/publication/dto/create-publication.dto";
import { UpdatePublicationDto } from "../../../application/use-cases/publication/dto/update-publication.dto";
import { PublicationEntity } from "../../../application/entities/publication.entity";
import { PublicationAbstractRepository } from "../../../application/repositories/publication-abstract.repository";

export class PublicationRepository implements PublicationAbstractRepository {
    constructor(
        @InjectRepository(PublicationEntity)
        private publicationRepository: Repository<PublicationEntity>,
        @InjectRepository(AuthorEntity)
        private authorRepository: Repository<AuthorEntity>,
    ) {}
    async findMany(): Promise<PublicationEntity[]> {
        return await this.publicationRepository.find();
    }
    async findByAuthor(authorId: string): Promise<PublicationEntity[] | NotFoundException> {
        const publications = await this.publicationRepository.find({where: { authorId } });
        if (!publications) return new NotFoundException('Publications not found!'); 
       
        return publications;
    }
    async findById(id: string): Promise<PublicationEntity | NotFoundException> {
        const publication = await this.publicationRepository.findOne({where: { id } });
        if (!publication) return new NotFoundException('Publication not found!'); 
       
        return publication;
    }
    async create(data: CreatePublicationDto): Promise<void | ConflictException> {
        const publication = await this.publicationRepository.findOne({ where: {  title: data.title }});

        if (publication) return new ConflictException({ message: 'Publication existed!' });

        const author = await this.authorRepository.findOne({ where: { id: data.authorId } });

        if (!author) return new NotFoundException({ message: 'Author not found!' }); 

        await this.publicationRepository.save(this.publicationRepository.create(data));
    }
    async update(id: string, data: UpdatePublicationDto): Promise<void | NotFoundException> {
        const publication = await this.publicationRepository.findOne({ where: { id } });

        if (!publication) return new NotFoundException({ message: 'Publication not found!' });
        
        this.publicationRepository.merge(publication, data);

        await this.publicationRepository.save(publication);
    }
    async remove(id: string): Promise<void | NotFoundException> {
        await this.findById(id);
        await this.publicationRepository.softDelete(id);
    }
}