import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const payoutsGetEarningStatisticsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['payouts'],
				operation: ['getEarningStatistics'],
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
				resource: ['payouts'],
				operation: ['getEarningStatistics'],
			},
		},
		options: [
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'string',
				default: '',
				description: 'The end date for earning statistics (e.g., 2024-01-31 23:59:59). Keep empty to get all earnings.',
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'string',
				default: '',
				description: 'The start date for earning statistics (e.g., 2024-01-01 00:00:00). Keep empty to get all earnings.',
			},
		],
	},
];
