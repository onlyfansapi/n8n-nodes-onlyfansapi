import type { EndpointResource } from '../index';

import { listQueueItemsOperation } from './queue';

export const queueResource: EndpointResource = {
	name: 'queue',
	displayName: 'Queue',
	description: 'List posts and messages in the queue.',
	endpoint: '/{account}/queue',
	operations: [listQueueItemsOperation],
};

import { publishQueueItemOperation } from './publish';

export const publishResource: EndpointResource = {
	name: 'publish',
	displayName: 'Publish',
	description: 'Publish a queue item or "saved for later" item (post or mass message). This means that the item will be sent immediately, regardless of its scheduled date.',
	endpoint: '/{account}/queue/{queue_id}/publish',
	operations: [publishQueueItemOperation],
};

import { countQueueItemsOperation } from './counts';

export const countsResource: EndpointResource = {
	name: 'counts',
	displayName: 'Counts',
	description: 'Count posts and messages in the queue.',
	endpoint: '/{account}/queue/counts',
	operations: [countQueueItemsOperation],
};

export const queueResources: EndpointResource[] = [
	queueResource,
	publishResource,
	countsResource
];
