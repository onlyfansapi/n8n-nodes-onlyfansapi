import type { INodeProperties } from 'n8n-workflow';

export const webhookIdParameter: INodeProperties = {
	displayName: 'Webhook ID',
	name: 'webhookId',
	type: 'string',
	required: true,
	default: '',
	description: 'The ID of the webhook',
};

