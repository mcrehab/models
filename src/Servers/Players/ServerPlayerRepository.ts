import { Repository, EntityRepository } from "typeorm";
import { ServerPlayer } from './ServerPlayer';

@EntityRepository(ServerPlayer)
export class ServerPlayerRepository extends Repository<ServerPlayer> {

}
