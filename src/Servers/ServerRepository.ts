import { EntityRepository } from "typeorm";
import { Server } from "./Server";
import { BaseRepository } from '../BaseRepository';
import { User } from '../RBAC/User';

@EntityRepository(Server)
export class ServerRepository extends BaseRepository<Server> {

    public getByIdAndUser(id: string, user: User): Promise<Server> {

        return this.findOneOrFail({
            
            where: { id, user }

        });

    }

}
