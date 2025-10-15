import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const statisticsCalculateTotalTransactionsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['calculateTotalTransactions'],
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
				resource: ['statistics'],
				operation: ['calculateTotalTransactions'],
			},
		},
		options: [
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'string',
				default: '',
				description: 'The end date for the period (leave empty to calculate everything)',
			},
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'string',
				default: '',
				description: 'The start date for the period (leave empty to calculate everything)',
			},
		],
	},
];

