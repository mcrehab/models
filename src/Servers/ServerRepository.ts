import { Repository } from "typeorm";
import { EntityRepository } from "typeorm";
import {Server} from "./Server";

@EntityRepository()
export class ServerRepository extends Repository<Server> {

}