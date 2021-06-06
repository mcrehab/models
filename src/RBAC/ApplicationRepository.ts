import { EntityRepository, Repository } from 'typeorm';
import { Application }                  from './Application';

@EntityRepository(Application)
export class ApplicationRepository extends Repository<Application> {

    public getByName(name: string): Promise<Application> {

        return this.findOne({ where: { name } });

    }

}
