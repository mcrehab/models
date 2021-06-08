import { Repository, EntityRepository } from "typeorm";
import { ServerType } from './ServerType';

@EntityRepository(ServerType)
export class ServerTypeRepository extends Repository<ServerType> {

}
