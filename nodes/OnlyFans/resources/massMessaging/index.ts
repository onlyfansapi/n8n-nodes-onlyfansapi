import type { EndpointResource } from '../index';

import { getMassMessageOverviewOperation } from './overview';

export const overviewResource: EndpointResource = {
	name: 'overview',
	displayName: 'Overview',
	description: 'Get an overview of mass messages, showing the send count and view count.',
	endpoint: '/{account}/mass-messaging/overview',
	operations: [getMassMessageOverviewOperation],
};

import { listMassMessageQueueOperation, sendMassMessageOperation  } from './massMessaging';

export const massMessagingResource: EndpointResource = {
	name: 'massMessaging',
	displayName: 'Mass-Messaging',
	description: 'List the pending or recently sent mass messages in the message queue.',
	endpoint: '/{account}/mass-messaging',
	operations: [listMassMessageQueueOperation, sendMassMessageOperation],
};

import { getMassMessageOperation, updateMassMessageOperation , unsendDeleteMassMessageOperation  } from './id';

export const idResource: EndpointResource = {
	name: 'id',
	displayName: '{Id}',
	description: 'Get the content of a mass message.',
	endpoint: '/{account}/mass-messaging/{id}',
	operations: [getMassMessageOperation, updateMassMessageOperation, unsendDeleteMassMessageOperation],
};

export const massMessagingResources: EndpointResource[] = [
	overviewResource,
	massMessagingResource,
	idResource
];
