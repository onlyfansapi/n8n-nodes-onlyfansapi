import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter, messageIdParameter } from './sharedParameters';

export const chatMessagesPinDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['pin'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['pin'],
			},
		},
	},
	{
		...messageIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['pin'],
			},
		},
	},
];
