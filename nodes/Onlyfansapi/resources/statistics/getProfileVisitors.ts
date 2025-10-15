import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const statisticsGetProfileVisitorsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['statistics'],
				operation: ['getProfileVisitors'],
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
				operation: ['getProfileVisitors'],
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
				operation: ['getProfileVisitors'],
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
		],
	},
];

