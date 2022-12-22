import { ApiProperty } from "@nestjs/swagger";
import { 
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity({ name: 'publication' })
export class PublicationEntity {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;

    @Column()
    @ApiProperty()
    title: string;
   
    @Column()
    @ApiProperty()
    subTitle?: string;

    @Column()
    @ApiProperty({ name: 'company-sector' })
    companySector: string;
    
    @Column()
    @ApiProperty()
    description: string;

    @Column({ name: 'path-image' })
    @ApiProperty()
    pathImage?: string;

    @Column({ name: 'author-id' })
    @ApiProperty()
    authorId: string;

    @CreateDateColumn({ name: 'created-at '})
    @ApiProperty()
    createdAt: string;

    @UpdateDateColumn({ name: 'updated-at'})
    @ApiProperty()
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    @ApiProperty()
    deletedAt: string;

    constructor(publication?: Partial<PublicationEntity>) {
        this.id = publication?.id;
        this.title = publication?.title;
        this.subTitle = publication?.subTitle;
        this.companySector = publication?.companySector;
        this.pathImage = publication?.pathImage;
        this.createdAt = publication?.createdAt;
        this.updatedAt = publication?.updatedAt;
        this.deletedAt = publication?.deletedAt;
    }
}