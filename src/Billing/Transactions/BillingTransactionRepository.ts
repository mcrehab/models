import { Repository, EntityRepository } from "typeorm";
import { BillingTransaction } from './BillingTransaction';

@EntityRepository(BillingTransaction)
export class BillingTransactionRepository extends Repository<BillingTransaction> {

}
