import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const postsGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
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
				resource: ['posts'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Counters',
				name: 'counters',
				type: 'boolean',
				default: false,
				description: 'Whether to include an array of counters',
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
				displayName: 'Minimum Publish Date',
				name: 'minimumPublishDate',
				type: 'string',
				default: '',
				description: 'Filter posts by minimum publish date (YYYY-MM-DD)',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of posts to skip for pagination',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'options',
				default: 'publish_date',
				options: [
					{
						name: 'Publish Date',
						value: 'publish_date',
					},
					{
						name: 'Favorites Count',
						value: 'favorites_count',
					},
					{
						name: 'Tips Sum',
						value: 'tips_summ',
					},
				],
				description: 'Order the returned posts',
			},
			{
				displayName: 'Pinned',
				name: 'pinned',
				type: 'boolean',
				default: false,
				description: 'Whether to only show pinned posts',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query to filter posts',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'options',
				default: 'desc',
				options: [
					{
						name: 'Descending',
						value: 'desc',
					},
					{
						name: 'Ascending',
						value: 'asc',
					},
				],
				description: 'Sort the returned posts',
			},
		],
	},
];

