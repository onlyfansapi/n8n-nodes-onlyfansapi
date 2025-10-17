import type { INodeProperties } from 'n8n-workflow';
import { webhooksCreateDescription } from './create';
import { webhooksDeleteDescription } from './delete';

const showOnlyForWebhooks = {
	resource: ['webhooks'],
};

export const webhooksDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForWebhooks,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create webhook',
				description: 'Create a new webhook for your team',
				routing: {
					request: {
						method: 'POST',
						url: '=/webhooks',
						body: {
							endpoint_url: '={{$parameter.endpoint_url}}',
							events: '={{$parameter.events}}',
							signing_secret: '={{$parameter.additionalFields.signing_secret}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete webhook',
				description: 'Delete an existing webhook',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/webhooks/{{$parameter.webhookId}}',
					},
				},
			},
		],
		default: 'create',
	},
	...webhooksCreateDescription,
	...webhooksDeleteDescription,
];

