import type { EndpointResource } from '../index';

import { createClientSessionOperation } from './clientSessions';

export const clientSessionsResource: EndpointResource = {
	name: 'clientSessions',
	displayName: 'Client-Sessions',
	description: 'Create Client Session Token for later use in embedded auth components.',
	endpoint: '/client-sessions',
	operations: [createClientSessionOperation],
};

export const clientSessionsResources: EndpointResource[] = [
	clientSessionsResource
];
