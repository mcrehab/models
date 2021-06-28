import { Repository, EntityRepository } from "typeorm";
import { ServerBackup } from './ServerBackup';

@EntityRepository(ServerBackup)
export class ServerBackupRepository extends Repository<ServerBackup> {

}
