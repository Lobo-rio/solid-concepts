import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
        const dataSource = new DataSource({
            type: 'sqlite',
            database: './src/infra/database/gsm-db.sqlite',
            entities: [__dirname + '/**/*.entity{.js,.ts}'],
            synchronize: true,
        });

        return dataSource.initialize();
        },
    },
];