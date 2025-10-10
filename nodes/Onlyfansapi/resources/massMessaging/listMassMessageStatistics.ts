import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const massMessagingListMassMessageStatisticsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['listMassMessageStatistics'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['massMessaging'],
				operation: ['listMassMessageStatistics'],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of mass messages to skip for pagination',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Optionally, find a mass message by the message text',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'sent',
				options: [
					{
						name: 'Scheduled',
						value: 'scheduled',
					},
					{
						name: 'Sent',
						value: 'sent',
					},
					{
						name: 'Unsent',
						value: 'unsent',
					},
				],
				description: 'Filter by sent / scheduled / unsent. Default = sent.',
			},
		],
	},
];
