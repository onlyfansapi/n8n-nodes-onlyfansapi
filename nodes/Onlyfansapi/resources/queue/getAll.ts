import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const queueGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['getAll'],
			},
		},
	},
	{
		displayName: 'Publish Date Start',
		name: 'publishDateStart',
		type: 'string',
		required: true,
		default: '',
		description: 'Earliest publish date to return (must be at least today)',
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['getAll'],
			},
		},
	},
	{
		displayName: 'Publish Date End',
		name: 'publishDateEnd',
		type: 'string',
		required: true,
		default: '',
		description: 'Latest publish date to return',
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['getAll'],
			},
		},
	},
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		required: true,
		default: 'UTC',
		description: 'Time timezone of the provided dates (e.g., Europe/Prague, America/New_York, UTC)',
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['getAll'],
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
				resource: ['queue'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
			},
		],
	},
];

