export interface ServerPropertyEntry {

    name: string;
    description: string;
    key: string;
    type: 'text' | 'textarea' | 'select' | 'checkbox' | 'toggle' | 'range';
    default: string | number | boolean,
    min?: number;
    max?: number;
    values?: Array<string | number>;

}