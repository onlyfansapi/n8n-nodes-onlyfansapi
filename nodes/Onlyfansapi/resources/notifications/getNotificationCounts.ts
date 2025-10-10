import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const notificationsGetNotificationCountsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['getNotificationCounts'],
			},
		},
	},
];
