export interface ServerPropertyEntry {

    name: string;
    description: string;
    key: string;
    type: 'boolean' | 'number' | 'string' | 'dropdown' | 'range';
    default: string | number | boolean,
    min?: number;
    max?: number;
    values?: Array<string | number>;

}