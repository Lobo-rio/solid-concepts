import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './application/author.module';
import { PublicationModule } from './application/publication.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/infra/database/gsm-db.sqlite',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
      logging: false,
    }),
    AuthorModule,
    PublicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
