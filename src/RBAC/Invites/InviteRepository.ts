import { EntityRepository, Repository } from 'typeorm';
import { Invite } from './Invite';

@EntityRepository(Invite)
export class InviteRepository extends Repository<Invite> {

}
