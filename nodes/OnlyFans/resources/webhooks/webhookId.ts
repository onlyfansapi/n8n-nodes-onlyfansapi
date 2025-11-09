import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const showWebhookResource: INodeProperties[] = [
		{
			displayName: 'The Webhook ID',
			name: 'webhook_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The webhook ID',
		},
];

export const showWebhookOperation = {
	name: 'showWebhook',
	displayName: 'Show Webhook',
	method: 'GET' as const,
	parameters: showWebhookResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const updateWebhookResource: INodeProperties[] = [
		{
			displayName: 'The Webhook ID',
			name: 'webhook_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The webhook ID',
		},
		{
			displayName: 'The URL of Your Webhook Endpoint',
			name: 'endpoint_url',
			type: 'string',
			default: 'https://example.com',
			required: true,
			description: 'The URL of your webhook endpoint',
		},
		{
			displayName: 'An Array of Webhook Events to Subscribe To',
			name: 'events',
			type: 'string',
			default: 'accounts.connected,subscriptions.new',
			required: true,
			description: 'An array of webhook events to subscribe to. For all options, refer to our **List Available Events** endpoint.',
		},
		{
			displayName: 'Optionally, Enabled/disable the Webhook',
			name: 'enabled',
			type: 'boolean',
			default: true,
			description: 'Whether to enable/disable the webhook. This will stop/resume the sending of events, without having to delete the webhook.',
		},
];

export const updateWebhookOperation = {
	name: 'updateWebhook',
	displayName: 'Update Webhook',
	method: 'PUT' as const,
	parameters: updateWebhookResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const deleteWebhookResource: INodeProperties[] = [
		{
			displayName: 'The Webhook ID',
			name: 'webhook_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The webhook ID',
		},
];

export const deleteWebhookOperation = {
	name: 'deleteWebhook',
	displayName: 'Delete Webhook',
	method: 'DELETE' as const,
	parameters: deleteWebhookResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

