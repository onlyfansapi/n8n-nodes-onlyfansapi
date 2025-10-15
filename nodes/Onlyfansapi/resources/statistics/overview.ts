import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const statisticsOverviewDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['overview'],
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
				operation: ['overview'],
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
				operation: ['overview'],
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
				default: 'general',
				options: [
					{
						name: 'Fans',
						value: 'fans',
					},
					{
						name: 'General',
						value: 'general',
					},
					{
						name: 'Posts',
						value: 'posts',
					},
					{
						name: 'Visitors',
						value: 'visitors',
					},
				],
				description: 'Type of statistics overview',
			},
		],
	},
];

