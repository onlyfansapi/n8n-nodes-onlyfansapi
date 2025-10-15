import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const savedForLaterMessagesEnableAutomaticMessagingDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['savedForLaterMessages'],
				operation: ['enableAutomaticMessaging'],
			},
		},
	},
	{
		displayName: 'Period',
		name: 'period',
		type: 'options',
		required: true,
		default: 12,
		options: [
			{
				name: '6 Hours',
				value: 6,
			},
			{
				name: '12 Hours',
				value: 12,
			},
			{
				name: '24 Hours',
				value: 24,
			},
			{
				name: '48 Hours',
				value: 48,
			},
		],
		description: 'The automatic messaging interval (in hours)',
		displayOptions: {
			show: {
				resource: ['savedForLaterMessages'],
				operation: ['enableAutomaticMessaging'],
			},
		},
	},
];

