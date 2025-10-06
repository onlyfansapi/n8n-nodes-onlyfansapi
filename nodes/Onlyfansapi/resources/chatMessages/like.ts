import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter, messageIdParameter } from './sharedParameters';

export const chatMessagesLikeDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['like'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['like'],
			},
		},
	},
	{
		...messageIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['like'],
			},
		},
	},
];
