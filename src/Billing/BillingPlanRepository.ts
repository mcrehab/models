import { Repository, EntityRepository } from "typeorm";
import { BillingPlan } from './BillingPlan';

@EntityRepository(BillingPlan)
export class BillingPlanRepository extends Repository<BillingPlan> {

}
