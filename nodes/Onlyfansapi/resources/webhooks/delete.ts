import type { INodeProperties } from 'n8n-workflow';
import { webhookIdParameter } from './sharedParameters';

export const webhooksDeleteDescription: INodeProperties[] = [
	{
		...webhookIdParameter,
		displayOptions: {
			show: {
				resource: ['webhooks'],
				operation: ['delete'],
			},
		},
	},
];

