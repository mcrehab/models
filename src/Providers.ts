import { Connection, createConnection } from 'typeorm';
import { Location }                     from './locations/Location';
import { LocationRepository }           from './locations/LocationRepository';
import { Organization }                 from './RBAC/Organization';
import { OrganizationRepository }       from './RBAC/OrganizationRepository';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: process.env.DB_HOSTNAME,
            port: Number.parseInt(process.env.DB_PORT) || 3306,
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'mysql',
            database: process.env.DB_NAME || 'rbac',
            synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
            connectTimeout: 30000,
            logging: false,
            entities: [
                Location,
                Organization,
            ],
        }),
    },
];
export const repositoryProviders = [

    {

        provide: 'LOCATION_REPOSITORY',
        useFactory: (connection: Connection) => connection.getCustomRepository(LocationRepository),
        inject: [ 'DATABASE_CONNECTION' ]

    }, {

        provide: 'ORGANIZATION_REPOSITORY',
        useFactory: (connection: Connection) => connection.getCustomRepository(OrganizationRepository),
        inject: [ 'DATABASE_CONNECTION' ]

    }

];
