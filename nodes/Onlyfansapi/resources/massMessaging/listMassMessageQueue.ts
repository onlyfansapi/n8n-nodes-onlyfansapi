import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const massMessagingListMassMessageQueueDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['listMassMessageQueue'],
			},
		},
	},
];
