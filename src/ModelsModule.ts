import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsModuleOptions } from './ModelsModuleOptions';
import {ServerWhitelistRepository} from "./Servers/Whitelist/ServerWhitelistRepository";
import {ServerRepository} from "./Servers/ServerRepository";
import {Server} from "./Servers/Server";
import {ServerWhitelist} from "./Servers/Whitelist/ServerWhitelist";


@Global()
@Module({


    imports: [

        TypeOrmModule.forRoot({

            type: 'mysql',
            host: process.env.DB_HOSTNAME,
            port: Number.parseInt(process.env.DB_PORT) || 3306,
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'mysql',
            database: process.env.DB_NAME || 'sp',
            synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
            connectTimeout: 30000,
            logging: process.env.DB_LOGGING === 'true',
            keepConnectionAlive: true,
            entities: [

                Server,
                ServerWhitelist

            ]

        })

    ],

    providers: [



    ],

    exports: [

        TypeOrmModule,
        TypeOrmModule.forFeature([

            ServerRepository,
            ServerWhitelistRepository

        ])


    ]

})
export class ModelsModule {

    public static forRoot(options?: ModelsModuleOptions): DynamicModule {

        return {

            module: ModelsModule,

            imports: [

                TypeOrmModule.forRoot({

                    type: 'mysql',
                    host: process.env.DB_HOSTNAME,
                    port: Number.parseInt(process.env.DB_PORT) || 3306,
                    username: process.env.DB_USERNAME || 'root',
                    password: process.env.DB_PASSWORD || 'mysql',
                    database: process.env.DB_NAME || 'rbac',
                    synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
                    connectTimeout: 30000,
                    logging: process.env.DB_LOGGING === 'true',
                    keepConnectionAlive: true,
                    entities: [

                        Server,
                        ServerWhitelist

                    ]

                }),
                TypeOrmModule.forFeature([

                    ServerRepository,
                    ServerWhitelistRepository

                ])


            ],

            providers: [

                ServerRepository,
                ServerWhitelistRepository
            ],

            exports: [

                TypeOrmModule,

                ServerRepository,
                ServerWhitelistRepository

            ]

        };

    }

}
