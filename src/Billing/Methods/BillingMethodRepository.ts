import { Repository, EntityRepository } from "typeorm";
import { BillingMethod } from './BillingMethod';

@EntityRepository(BillingMethod)
export class BillingMethodRepository extends Repository<BillingMethod> {

}
