import type { EndpointResource } from '../index';

import { listAvailableEventsOperation } from './events';

export const eventsResource: EndpointResource = {
	name: 'events',
	displayName: 'Events',
	description: 'Retrieve a list of all available webhook event types',
	endpoint: '/webhooks/events',
	operations: [listAvailableEventsOperation],
};

import { listWebhooksOperation, createWebhookOperation  } from './webhooks';

export const webhooksResource: EndpointResource = {
	name: 'webhooks',
	displayName: 'Webhooks',
	description: 'Retrieve a list of webhooks for your Team',
	endpoint: '/webhooks',
	operations: [listWebhooksOperation, createWebhookOperation],
};

import { showWebhookOperation, updateWebhookOperation , deleteWebhookOperation  } from './webhookId';

export const webhookIdResource: EndpointResource = {
	name: 'webhookId',
	displayName: '{Webhook Id}',
	description: 'Retrieve details about a specific webhook',
	endpoint: '/webhooks/{webhook_id}',
	operations: [showWebhookOperation, updateWebhookOperation, deleteWebhookOperation],
};

export const webhooksResources: EndpointResource[] = [
	eventsResource,
	webhooksResource,
	webhookIdResource
];
