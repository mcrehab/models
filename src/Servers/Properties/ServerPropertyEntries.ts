import { ServerPropertyEntry } from './ServerPropertyEntry';

export const ServerPropertyEntries: Array<ServerPropertyEntry> = [

    {
        name: 'Player Slots',
        description: 'Maximum number of players for this server.',
        key: 'max-players',
        type: 'text',
        default: '10'
        

    }, {

        name: 'Difficulty',
        description: 'Difficulty level for this server.',
        key: 'difficulty',
        type: 'select',
        default: 'easy',
        min: 1,
        max: 1000,
        values: [ 'peaceful', 'easy', 'normal', 'hard' ]

    }, {

        name: 'Enforce Whitelist',
        description: 'Turn this on to require players to be in the whitelist.',
        key: 'enforce-whitelist',
        type: 'toggle',
        default: false

    }, {

        name: 'Command blocks',
        description: 'Toggles the ability to use CommandBlocks.',
        key: 'enable-command-block',
        type: 'toggle',
        default: true

    }, {

        name: 'Animal spawning',
        description: 'Toggles animal spawning.',
        key: 'spawn-animals',
        type: 'toggle',
        default: true

    }, {

        name: 'Villager spawning',
        description: 'Toggles Villager spawning.',
        key: 'spawn-npcs',
        type: 'toggle',
        default: true

    }, {

        name: 'Force gamemode',
        description: 'Forces all players into the default gamemode.',
        key: 'force-gamemode',
        type: 'toggle',
        default: false

    }, {

        name: 'Resource pack required',
        description: 'Requires players to use a custom resource pack to join the server.',
        key: 'require-resource-pack',
        type: 'toggle',
        default: false

    }, {

        name: 'Resource pack url',
        description: 'Url of the server resource pack.',
        key: 'resource-pack',
        type: 'text',
        default: ''

    }, {

        name: 'PvP',
        description: 'Toggles the ability for players to damage eachother',
        key: 'pvp',
        type: 'toggle',
        default: true

    }, {

        name: 'Flight',
        description: 'allows flight',
        key: 'allow-flight',
        type: 'toggle',
        default: true

    }, {

        name: 'Monster spawning',
        description: 'Toggle monster spawning',
        key: 'spawn-monsters',
        type: 'toggle',
        default: true

    }, {

        name: 'Enable nether',
        description: 'Allows players to access the nether',
        key: 'allow-nether',
        type: 'toggle',
        default: true

    }, {
        name: 'Spawn protection radius',
        description: 'How big the radius for spawn protection is',
        key: 'max-protection',
        type: 'text',
        default: '0'


    }


];