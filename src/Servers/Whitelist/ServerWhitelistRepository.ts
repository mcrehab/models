import { Repository } from "typeorm";
import { EntityRepository } from "typeorm";
import {ServerWhitelist} from "./ServerWhitelist";

@EntityRepository()
export class ServerWhitelistRepository extends Repository<ServerWhitelist> {

}