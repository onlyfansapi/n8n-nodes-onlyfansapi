import type { INodeProperties } from 'n8n-workflow';

export const publicProfilesSearchDescription: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		description: 'Query for full text search in username, display name, bio (must be at least 3 characters)',
		displayOptions: {
			show: {
				resource: ['publicProfiles'],
				operation: ['search'],
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
				resource: ['publicProfiles'],
				operation: ['search'],
			},
		},
		options: [
			{
				displayName: 'Facebook',
				name: 'facebook',
				type: 'string',
				default: '',
				description: 'Filter by Facebook handle',
			},
			{
				displayName: 'Instagram',
				name: 'instagram',
				type: 'string',
				default: '',
				description: 'Filter by Instagram handle',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Filter by location',
			},
			{
				displayName: 'Max Subscribe Price',
				name: 'max_subscribe_price',
				type: 'number',
				default: 0,
				description: 'Maximum subscribe price',
			},
			{
				displayName: 'Min Subscribe Price',
				name: 'min_subscribe_price',
				type: 'number',
				default: 0,
				description: 'Minimum subscribe price',
			},
			{
				displayName: 'TikTok',
				name: 'tiktok',
				type: 'string',
				default: '',
				description: 'Filter by TikTok handle',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				description: 'Filter by website URL',
			},
		],
	},
];

