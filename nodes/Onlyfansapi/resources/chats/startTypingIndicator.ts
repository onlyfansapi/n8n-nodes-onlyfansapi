import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter } from './sharedParameters';

export const chatsStartTypingIndicatorDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['startTypingIndicator'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
				operation: ['startTypingIndicator'],
			},
		},
	},
];
