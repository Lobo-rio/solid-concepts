import { ApiProperty } from "@nestjs/swagger";
import { 
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { PublicationEntity } from "./publication.entity";

@Entity({ name: 'author' })
export class AuthorEntity {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;

    @Column()
    @ApiProperty()
    name: string;
   
    @Column()
    @ApiProperty()
    email: string;

    @Column({ name: 'path-image' })
    @ApiProperty()
    pathImage?: string;

    @OneToMany(() => PublicationEntity, (publication) => publication.authorId)
    publications: PublicationEntity[]

    @CreateDateColumn({ name: 'created-at '})
    @ApiProperty()
    createdAt: string;

    @UpdateDateColumn({ name: 'updated-at'})
    @ApiProperty()
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    @ApiProperty()
    deletedAt: string;

    constructor(author?: Partial<AuthorEntity>) {
        this.id = author?.id;
        this.name = author?.name;
        this.email = author?.email;
        this.pathImage = author?.pathImage;
        this.createdAt = author?.createdAt;
        this.updatedAt = author?.updatedAt;
        this.deletedAt = author?.deletedAt;
    }
}