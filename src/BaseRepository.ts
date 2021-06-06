// import { Repository } from 'typeorm';
// import { ResourceNotFoundException } from '@nestjs.pro/common/dist/exceptions/ResourceNotFoundException';
// import { Organization } from './RBAC/Organization';
//
// export class BaseRepository<T> extends Repository<T> {
//
//     /**
//      * Retrieve an existing record by id and organization.
//      *
//      * @param {string} id UUID
//      * @param organization
//      * @param relations Tables to join in
//      *
//      * @returns {Promise<T>}
//      *
//      * @throws {ResourceNotFoundException} Thrown if record could not be located.
//      */
//     public getByIdAndOrganization(id: string, organization: Organization, relations?: Array<string>): Promise<T> {
//
//         return new Promise(async (resolve, reject) => {
//
//             const entity = await this.findOne({ where: { id, organization }, relations });
//
//             if (entity) {
//
//                 resolve(entity);
//
//             } else {
//
//                 reject(new ResourceNotFoundException('could not locate item'));
//
//             }
//
//         });
//
//     }
//
//     public async deleteByIdAndOrganization(id: string, organization: Organization): Promise<T> {
//
//         return this.remove(await this.getByIdAndOrganization(id, organization));
//
//     }
//
//     public getByOrganization(organization: Organization, relations?: Array<string>, order?: any): Promise<Array<T>> {
//
//         return this.find({
//
//             where: {
//
//                 organization
//
//             },
//
//             order,
//             relations
//
//         });
//
//     }
//
//     public getById(id: string, relations?: Array<string>): Promise<T> {
//
//         return new Promise(async (resolve, reject) => {
//
//             const entity = await this.findOne({ where: { id }, relations });
//
//             if (entity) {
//
//                 resolve(entity);
//
//             } else {
//
//                 reject(new ResourceNotFoundException('could not locate item'));
//
//             }
//
//         });
//
//     }
//
//     public findByFields(where: { [ key: string ]: string | number }, relations?: Array<string>): Promise<Array<T>> {
//
//         return this.find({ where, relations });
//
//     }
//
// }
