import { Repository, EntityRepository } from 'typeorm';
import { TeamInvite } from './TeamInvite';

@EntityRepository(TeamInvite)
export class TeamInviteRepository extends Repository<TeamInvite> {

}
