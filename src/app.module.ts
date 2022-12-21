import { Module } from '@nestjs/common';
import { DataBaseModule } from './infra/database/database.module';
import { AuthorController } from './infra/http/controllers/author.controller';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [
    DataBaseModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
