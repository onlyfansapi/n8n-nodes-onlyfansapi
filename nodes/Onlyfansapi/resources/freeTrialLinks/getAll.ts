import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const freeTrialLinksGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
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
				resource: ['freeTrialLinks'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Field',
				name: 'field',
				type: 'options',
				default: 'create_date',
				options: [
					{
						name: 'Claims Count',
						value: 'claims_count',
					},
					{
						name: 'Create Date',
						value: 'create_date',
					},
					{
						name: 'Expire Date',
						value: 'expire_date',
					},
					{
						name: 'Subscribe Counts',
						value: 'subscribe_counts',
					},
					{
						name: 'Subscribe Days',
						value: 'subscribe_days',
					},
				],
				description: 'Sort the results by a field. Default create_date.',
			},
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
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'The offset used for pagination',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'options',
				default: 'desc',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
					},
					{
						name: 'Descending',
						value: 'desc',
					},
				],
				description: 'Sort the results. Default desc.',
			},
			{
				displayName: 'Synchronous',
				name: 'synchronous',
				type: 'boolean',
				default: false,
				description: 'Whether to wait for the revenue data to finish processing, instead of processing in the background. Will result in longer response times, use with caution. Default false',
			},
		],
	},
];
