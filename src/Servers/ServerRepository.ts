import { Repository, EntityRepository } from "typeorm";
import { Server } from "./Server";

@EntityRepository(Server)
export class ServerRepository extends Repository<Server> {

}
