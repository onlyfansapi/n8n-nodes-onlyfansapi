import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, massMessageIdParameter } from './sharedParameters';

export const massMessagingDeleteDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['delete'],
			},
		},
	},
	{
		...massMessageIdParameter,
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['delete'],
			},
		},
	},
];
