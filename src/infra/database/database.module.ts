import { Module } from '@nestjs/common';
import { dataBaseProviders } from '../database/sqlite/database.providers';

@Module({
  providers: [...dataBaseProviders],
  exports: [...dataBaseProviders],
})
export class DataBaseModule {}