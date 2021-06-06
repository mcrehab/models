import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './RBAC/Organization';
import { Application } from './RBAC/Application';
import { ApplicationRepository } from './RBAC/ApplicationRepository';
import { Camera } from './cameras/Camera';
import { CameraConnectionProperties } from './cameras/CameraConnectionProperties';
import { Neighborhood } from './neighborhoods/Neighborhood';
import { NeighborhoodInvite } from './neighborhoods/NeighborhoodInvite';
import { Permission } from './RBAC/Permission';
import { Role } from './RBAC/Role';
import { RoleRepository } from './RBAC/RoleRepository';
import { Token } from './RBAC/Token';
import { User } from './RBAC/User';
import { CameraRepository } from './cameras/CameraRepository';
import { LocationRepository } from './locations/LocationRepository';
import { NeighborhoodRepository } from './neighborhoods/NeighborhoodRepository';
import { NeighborhoodInviteRepository } from './neighborhoods/NeighborhoodInviteRepository';
import { OrganizationRepository } from './RBAC/OrganizationRepository';
import { PermissionRepository } from './RBAC/PermissionRepository';
import { UserRepository } from './RBAC/UserRepository';
import { Location } from './locations/Location';
import { ModelsModuleOptions } from './ModelsModuleOptions';
import { CameraSegment } from './cameras/CameraSegment';
import { CameraSegmentRepository } from './cameras/CameraSegmentRepository';
import { CamerasPlaylistRepository } from './cameras/playlists/CamerasPlaylistRepository';
import { CamerasPlaylistWatcher } from './cameras/playlists/CamerasPlaylistWatcher';
import { CameraSettingsProbe } from './cameras/settings/CameraSettingsProbe';
import { CameraSettingsProbeVideo } from './cameras/settings/CameraSettingsProbeVideo';
import { CameraSettingsProbeAudio } from './cameras/settings/CameraSettingsProbeAudio';
import { CamerasSettingsProbesRepository } from './cameras/settings/CamerasSettingsProbesRepository';

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

                Organization,

                Application,
                Camera,
                CameraSegment,

                CameraConnectionProperties,
                Location,
                Neighborhood,
                NeighborhoodInvite,
                // OrganizationRepository,
                //
                Permission,
                Role,
                Token,
                User

                // ApplicationRepository,
                // CameraRepository,
                // LocationRepository,
                // NeighborhoodRepository,
                // NeighborhoodInviteRepository,
                // OrganizationRepository,
                // RoleRepository,
                // PermissionRepository,
                // UserRepository

            ]

        })
        //


    ],

    providers: [

        // ApplicationRepository,
        CameraRepository
        // LocationRepository,
        // NeighborhoodRepository,
        // NeighborhoodInviteRepository,
        // OrganizationRepository,
        // RoleRepository,
        // PermissionRepository,
        // UserRepository

    ],

    exports: [

        TypeOrmModule,// ApplicationRepository,
        TypeOrmModule.forFeature([
            //
            //     RoleRepository, OrganizationRepository
            // Organization,
            // Camera,
            // CameraConnectionProperties,
            // Location,
            // Neighborhood,
            // NeighborhoodInvite,
            // OrganizationRepository,
            //
            // Permission,
            // Role,
            // Token,
            // User,
            ApplicationRepository,
            CameraRepository,
            CameraSegmentRepository,
            LocationRepository,
            NeighborhoodRepository,
            NeighborhoodInviteRepository,
            OrganizationRepository,
            RoleRepository,
            PermissionRepository,
            UserRepository

        ])
        // LocationRepository,
        // NeighborhoodRepository,
        // NeighborhoodInviteRepository,
        // OrganizationRepository,
        // RoleRepository,
        // PermissionRepository,
        // UserRepository

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

                        Camera,
                        CameraSegment,
                        CameraConnectionProperties,
                        CamerasPlaylistWatcher,
                        CameraSettingsProbe,
                        CameraSettingsProbeVideo,
                        CameraSettingsProbeAudio,
                        Location,
                        Neighborhood,
                        NeighborhoodInvite,
                        Organization,
                        Permission,
                        Role,
                        Token,
                        User

                    ]

                }),
                TypeOrmModule.forFeature([

                    // ApplicationRepository,
                    CameraRepository,
                    CameraSegmentRepository,
                    CamerasPlaylistRepository,
                    CamerasSettingsProbesRepository,
                    LocationRepository,
                    NeighborhoodRepository,
                    NeighborhoodInviteRepository,
                    OrganizationRepository,
                    RoleRepository,
                    PermissionRepository,
                    UserRepository

                ])


            ],

            providers: [

                ApplicationRepository,
                CameraRepository,
                CameraSegmentRepository,
                CamerasPlaylistRepository,
                CamerasSettingsProbesRepository,
                LocationRepository,
                NeighborhoodRepository,
                NeighborhoodInviteRepository,
                OrganizationRepository,
                RoleRepository,
                PermissionRepository,
                UserRepository

            ],

            exports: [

                TypeOrmModule,

                ApplicationRepository,
                CameraRepository,
                CameraSegmentRepository,
                CamerasPlaylistRepository,
                CamerasSettingsProbesRepository,
                LocationRepository,
                NeighborhoodRepository,
                NeighborhoodInviteRepository,
                OrganizationRepository,
                RoleRepository,
                PermissionRepository,
                UserRepository

            ]

        };

    }

}
