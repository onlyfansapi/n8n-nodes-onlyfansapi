import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter, messageIdParameter } from './sharedParameters';

export const chatMessagesUnpinDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['unpin'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['unpin'],
			},
		},
	},
	{
		...messageIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['unpin'],
			},
		},
	},
];
