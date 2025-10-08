import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter } from './sharedParameters';

export const chatsMuteChatNotificationsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['muteChatNotifications'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['muteChatNotifications'],
			},
		},
	},
];
