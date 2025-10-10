import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const notificationsMarkAllNotificationsAsReadDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['markAllNotificationsAsRead'],
			},
		},
	},
];
