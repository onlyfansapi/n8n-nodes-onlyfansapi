import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter } from './sharedParameters';

export const chatsUnmuteChatNotificationsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['unmuteChatNotifications'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['unmuteChatNotifications'],
			},
		},
	},
];
