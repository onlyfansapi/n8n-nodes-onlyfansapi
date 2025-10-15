import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const statisticsGetEarningsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['getEarnings'],
			},
		},
	},
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'string',
		required: true,
		default: '',
		description: 'The start date for the period',
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['getEarnings'],
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
				operation: ['getEarnings'],
			},
		},
		options: [
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'string',
				default: '',
				description: 'The end date for the period',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'total',
				options: [
					{
						name: 'Messages',
						value: 'messages',
					},
					{
						name: 'Posts',
						value: 'post',
					},
					{
						name: 'Streams',
						value: 'stream',
					},
					{
						name: 'Subscriptions',
						value: 'subscribes',
					},
					{
						name: 'Tips',
						value: 'tips',
					},
					{
						name: 'Total',
						value: 'total',
					},
				],
				description: 'Filter by type of earnings',
			},
		],
	},
];

