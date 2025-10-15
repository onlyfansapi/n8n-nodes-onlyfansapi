import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const savedForLaterMessagesDisableAutomaticMessagingDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['savedForLaterMessages'],
				operation: ['disableAutomaticMessaging'],
			},
		},
	},
];

