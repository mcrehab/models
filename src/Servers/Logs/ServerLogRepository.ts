import { Repository, EntityRepository } from "typeorm";
import { ServerLog } from './ServerLog';

@EntityRepository(ServerLog)
export class ServerLogRepository extends Repository<ServerLog> {

}
