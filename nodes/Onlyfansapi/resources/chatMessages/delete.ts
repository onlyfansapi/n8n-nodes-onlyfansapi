import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter, messageIdParameter } from './sharedParameters';

export const chatMessagesDeleteDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['delete'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['delete'],
			},
		},
	},
	{
		...messageIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['delete'],
			},
		},
	},
];
