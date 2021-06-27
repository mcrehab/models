import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsModuleOptions } from './ModelsModuleOptions';
import { ServerWhitelistRepository } from "./Servers/Whitelist/ServerWhitelistRepository";
import { ServerRepository } from "./Servers/ServerRepository";
import { Server } from "./Servers/Server";
import { ServerWhitelist } from "./Servers/Whitelist/ServerWhitelist";
import { ServerBackup } from './Servers/Backups/Backup';
import { ServerBackupRepository } from './Servers/Backups/ServerBackupRepository';
import { Team } from './Teams/Team';
import { TeamRepository } from './Teams/TeamRepository';
import { ServerProperty } from './Servers/Properties/ServerProperty';
import { User } from './RBAC/User';
import { Organization } from './RBAC/Organization';
import { Role } from './RBAC/Role';
import { Permission } from './RBAC/Permission';
import { ServerLog } from './Servers/Logs/ServerLog';
import { Token } from './RBAC/Token';
import { UserRepository } from './RBAC/UserRepository';
import { PermissionRepository } from './RBAC/PermissionRepository';
import { RoleRepository } from './RBAC/RoleRepository';
import { ServerType } from './Servers/Types/ServerType';
import { ServerTypeVersion } from './Servers/Types/Versions/ServerTypeVersion';
import { ServerTypeRepository } from './Servers/Types/ServerTypeRepository';
import { ServerTypeVersionRepository } from './Servers/Types/Versions/ServerTypeVersionRepository';
import { BillingPlanRepository } from './Billing/BillingPlanRepository';
import { BillingPlanEntitlementRepository } from './Billing/Entitlements/BillingPlanEntitlementRepository';
import { BillingMethodRepository } from './Billing/Methods/BillingMethodRepository';
import { BillingPlan } from './Billing/BillingPlan';
import { BillingPlanEntitlement } from './Billing/Entitlements/BillingPlanEntitlement';
import { BillingMethod } from './Billing/Methods/BillingMethod';
import { BillingTransaction } from './Billing/Transactions/BillingTransaction';
import { BillingTransactionRepository } from './Billing/Transactions/BillingTransactionRepository';
import { Invite } from './RBAC/Invites/Invite';
import { InviteRepository } from './RBAC/Invites/InviteRepository';

@Module({})
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

                        Organization,
                        Permission,
                        Role,
                        Token,
                        User,
                        Invite,

                        BillingMethod,
                        BillingPlan,
                        BillingPlanEntitlement,
                        BillingTransaction,
                        Server,
                        ServerBackup,
                        ServerLog,
                        ServerProperty,
                        ServerWhitelist,
                        ServerType,
                        ServerTypeVersion,
                        Team

                    ]

                }),
                TypeOrmModule.forFeature([

                    UserRepository,
                    PermissionRepository,
                    RoleRepository,
                    InviteRepository,

                    BillingMethodRepository,
                    BillingPlanRepository,
                    BillingPlanEntitlementRepository,
                    BillingTransactionRepository,
                    ServerRepository,
                    ServerBackupRepository,
                    ServerWhitelistRepository,
                    ServerTypeRepository,
                    ServerTypeVersionRepository,
                    TeamRepository

                ])


            ],

            providers: [

                BillingMethodRepository,
                BillingPlanRepository,
                BillingPlanEntitlementRepository,
                BillingTransactionRepository,
                ServerRepository,
                ServerBackupRepository,
                ServerWhitelistRepository,
                ServerTypeRepository,
                ServerTypeVersionRepository,
                TeamRepository

            ],

            exports: [

                TypeOrmModule,

                BillingMethodRepository,
                BillingPlanRepository,
                BillingPlanEntitlementRepository,
                BillingTransactionRepository,
                ServerRepository,
                ServerBackupRepository,
                ServerWhitelistRepository,
                ServerTypeRepository,
                ServerTypeVersionRepository,
                TeamRepository

            ]

        };

    }

}
