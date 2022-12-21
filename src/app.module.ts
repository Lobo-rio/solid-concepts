import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DataBaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [
    DataBaseModule,
    HttpModule,
    ApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
