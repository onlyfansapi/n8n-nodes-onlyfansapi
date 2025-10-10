import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const notificationsGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['notifications'],
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
				resource: ['notifications'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'From ID',
				name: 'from_id',
				type: 'number',
				default: '',
				description: 'Used for pagination. This value should be the ID of the previous response\'s last notification.',
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
				displayName: 'Skip Users',
				name: 'skip_users',
				type: 'options',
				default: 'all',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'None',
						value: 'none',
					},
				],
				description: 'Whether to skip user details. Default all.',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'all',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Comments',
						value: 'comments',
					},
					{
						name: 'Likes',
						value: 'likes',
					},
					{
						name: 'Mentions',
						value: 'mentions',
					},
					{
						name: 'OnlyFans',
						value: 'onlyfans',
					},
					{
						name: 'Promotions',
						value: 'promotions',
					},
					{
						name: 'Purchases',
						value: 'purchases',
					},
					{
						name: 'Subscriptions',
						value: 'subscriptions',
					},
					{
						name: 'Tags',
						value: 'tags',
					},
					{
						name: 'Tips',
						value: 'tips',
					},
				],
				description: 'Filter notifications by a specific type',
			},
		],
	},
];
