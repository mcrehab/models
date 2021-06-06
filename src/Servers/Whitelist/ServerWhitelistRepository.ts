import { Repository, EntityRepository } from "typeorm";
import { ServerWhitelist } from "./ServerWhitelist";

@EntityRepository(ServerWhitelist)
export class ServerWhitelistRepository extends Repository<ServerWhitelist> {

}
