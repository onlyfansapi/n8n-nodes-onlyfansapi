import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const notificationsSearchUsersInNotificationsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['searchUsersInNotifications'],
			},
		},
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['notifications'],
				operation: ['searchUsersInNotifications'],
			},
		},
		description: 'The query to search for. Can be either a name or username.',
	},
];
