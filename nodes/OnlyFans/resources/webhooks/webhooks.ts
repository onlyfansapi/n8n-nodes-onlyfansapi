import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listWebhooksResource: INodeProperties[] = [
];

export const listWebhooksOperation = {
	name: 'listWebhooks',
	displayName: 'List Webhooks',
	method: 'GET' as const,
	parameters: listWebhooksResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const createWebhookResource: INodeProperties[] = [
		{
			displayName: 'The URL of Your Webhook Endpoint',
			name: 'endpoint_url',
			type: 'string',
			default: 'https://example.com',
			required: true,
			description: 'The URL of your webhook endpoint',
		},
		{
			displayName: 'Optionally, Add a Signing Secret to Protect Your Webhook',
			name: 'signing_secret',
			type: 'string',
			typeOptions: { password: true },
			default: '7',
		},
		{
			displayName: 'An Array of Webhook Events to Subscribe To',
			name: 'events',
			type: 'string',
			default: 'accounts.connected,subscriptions.new',
			required: true,
			description: 'An array of webhook events to subscribe to. For all options, refer to our **List Available Events** endpoint.',
		},
];

export const createWebhookOperation = {
	name: 'createWebhook',
	displayName: 'Create Webhook',
	method: 'POST' as const,
	parameters: createWebhookResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

