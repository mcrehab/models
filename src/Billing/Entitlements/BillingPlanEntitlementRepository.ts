import { Repository, EntityRepository } from "typeorm";
import { BillingPlanEntitlement } from './BillingPlanEntitlement';

@EntityRepository(BillingPlanEntitlement)
export class BillingPlanEntitlementRepository extends Repository<BillingPlanEntitlement> {

}
