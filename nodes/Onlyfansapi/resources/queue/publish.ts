import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, queueIdParameter } from './sharedParameters';

export const queuePublishDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['publish'],
			},
		},
	},
	{
		...queueIdParameter,
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['publish'],
			},
		},
	},
];

