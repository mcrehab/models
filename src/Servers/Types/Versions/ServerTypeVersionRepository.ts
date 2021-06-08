import { Repository, EntityRepository } from "typeorm";
import { ServerTypeVersion } from './ServerTypeVersion';

@EntityRepository(ServerTypeVersion)
export class ServerTypeVersionRepository extends Repository<ServerTypeVersion> {

}
