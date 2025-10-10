import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, massMessageIdParameter } from './sharedParameters';

export const massMessagingGetDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['get'],
			},
		},
	},
	{
		...massMessageIdParameter,
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['get'],
			},
		},
	},
];
