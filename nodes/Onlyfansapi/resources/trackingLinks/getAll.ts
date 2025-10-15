import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const trackingLinksGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
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
				resource: ['trackingLinks'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'string',
				default: '',
				description: 'The end date for tracking links (leave empty to get all)',
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
				description: 'Sort the results',
			},
			{
				displayName: 'Sort By',
				name: 'sortby',
				type: 'options',
				default: 'created_date',
				options: [
					{
						name: 'Claims',
						value: 'claims',
					},
					{
						name: 'Created Date',
						value: 'created_date',
					},
				],
				description: 'Sort by subscriber count (claims) or creation date',
			},
			{
				displayName: 'Start Date',
				name: 'startDate',
				type: 'string',
				default: '',
				description: 'The start date for tracking links (leave empty to get all)',
			},
			{
				displayName: 'Synchronous',
				name: 'synchronous',
				type: 'boolean',
				default: false,
				description: 'Whether to wait for revenue data to finish processing (will result in longer response times)',
			},
			{
				displayName: 'With Deleted',
				name: 'with_deleted',
				type: 'boolean',
				default: false,
				description: 'Whether to include deleted tracking links in the response',
			},
		],
	},
];

