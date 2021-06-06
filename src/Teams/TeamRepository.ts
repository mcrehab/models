import { Repository, EntityRepository } from "typeorm";
import { Team } from './Team';

@EntityRepository(Team)
export class TeamRepository extends Repository<Team> {

}
