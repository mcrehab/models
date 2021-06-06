import { Repository, EntityRepository } from "typeorm";
import { ServerBackup } from './Backup';

@EntityRepository(ServerBackup)
export class ServerBackupRepository extends Repository<ServerBackup> {

}
