import { Server } from '@nestjs.pro/common/dist/server/Server';
import { ModelsModule } from './ModelsModule';

const serverUrls = [];

serverUrls.push('https://api.streamnvr.com/kubernetes');

if (Server.getEnvironment() === 'local') {

    serverUrls.push('http://localhost:10093');

}

Server.bootstrap(ModelsModule, 'modules', Number(process.env.PORT) || 10093, {

    path: 'swagger',
    title: 'Cameras API',
    description: 'Camera Management API',
    version: '0.0.1',
    tags: [],
    contactName: 'Matthew Davis',
    contactEmail: 'support@streamnvr.com',
    contactUrl: 'https://streamnvr.com',
    docsDescription: 'docs',
    docsUrl: 'https://streamnvr.com',
    serverUrls

}, [ 'http://localhost:4205' ], []);
