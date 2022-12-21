import { Module } from '@nestjs/common';
import { databaseProviders } from '../database/sqlite/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DataBaseModule {}