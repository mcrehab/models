import { ServerPropertyEntry } from './ServerPropertyEntry';

export const ServerPropertyEntries: Array<ServerPropertyEntry> = [

    {
        name: 'Player Slots',
        description: 'Maximum number of players for this server.',
        key: 'max-players',
        type: 'range',
        default: 10,
        min: 1,
        max: 1000

    }, {

        name: 'Difficulty',
        description: 'Difficulty level for this server.',
        key: 'difficulty',
        type: 'range',
        default: 'easy',
        min: 1,
        max: 1000,
        values: [ 'peaceful', 'easy', 'normal', 'hard' ]

    }, {

        name: 'Enforce Whitelist',
        description: 'Turn this on to require players to be in the whitelist.',
        key: 'enforce-whitelist',
        type: 'boolean',
        default: false

    }

];