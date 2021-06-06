import { EntitySchema } from 'typeorm';

export class ModelsModuleOptions {

    public additionalEntities?: Array<Function | string | EntitySchema<any>>;
    public additionalRepositories?: Array<any>;

}
