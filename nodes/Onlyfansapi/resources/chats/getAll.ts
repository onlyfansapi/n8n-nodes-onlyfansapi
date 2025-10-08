import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const chatsGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chats'],
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
				resource: ['chats'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'options',
				default: '',
				options: [
					{
						name: 'None',
						value: '',
					},
					{
						name: 'Pinned',
						value: 'pinned',
					},
					{
						name: 'Priority',
						value: 'priority',
					},
					{
						name: 'Unread',
						value: 'unread',
					},
					{
						name: 'Unread With Tips',
						value: 'unread_with_tips',
					},
					{
						name: 'With Tips',
						value: 'with_tips',
					},
				],
				description: 'Optionally, filter the chats by type',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Number of chats to skip for pagination',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'options',
				default: 'recent',
				options: [
					{
						name: 'Recent',
						value: 'recent',
					},
					{
						name: 'Old',
						value: 'old',
					},
				],
				description: 'Sort order for chats. Default = recent.',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query to filter chats',
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
				description: 'Whether to skip user details in response. Default = all.',
			},
		],
	},
];
