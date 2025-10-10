import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const notificationsUpdateNotificationTabsOrderDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['updateNotificationTabsOrder'],
			},
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'json',
		required: true,
		default: '[]',
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['updateNotificationTabsOrder'],
			},
		},
		description: 'Array of notification types in the desired order, e.g., ["all", "subscribed", "purchases"]',
	},
];
