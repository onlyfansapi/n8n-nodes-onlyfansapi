import type { EndpointResource } from '../index';

import { createClientSessionOperation } from './clientSessions';

export const clientSessionsResource: EndpointResource = {
	name: 'clientSessions',
	displayName: 'Client-Sessions',
	description: 'Create Client Session Token for later use in embedded auth components - eg. via @onlyfansapi/auth npm package.',
	endpoint: '/client-sessions',
	operations: [createClientSessionOperation],
};

export const clientSessionsResources: EndpointResource[] = [
	clientSessionsResource
];
