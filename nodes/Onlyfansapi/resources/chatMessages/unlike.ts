import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter, messageIdParameter } from './sharedParameters';

export const chatMessagesUnlikeDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['unlike'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['unlike'],
			},
		},
	},
	{
		...messageIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['unlike'],
			},
		},
	},
];
