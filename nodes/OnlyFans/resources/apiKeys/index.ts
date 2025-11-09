import type { EndpointResource } from '../index';

import { whoamiOperation } from './whoami';

export const whoamiResource: EndpointResource = {
	name: 'whoami',
	displayName: 'Whoami',
	description: 'Get details about the currently used API Key & the relevant Team',
	endpoint: '/whoami',
	operations: [whoamiOperation],
};

export const apiKeysResources: EndpointResource[] = [
	whoamiResource
];
