import { Repository, EntityRepository } from "typeorm";
import { ServerProperty } from './ServerProperty';

@EntityRepository(ServerProperty)
export class ServerPropertiesRepository extends Repository<ServerProperty> {

}
