import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, chatIdParameter } from './sharedParameters';

export const chatMessagesGetAllDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
				operation: ['getAll'],
			},
		},
	},
	{
		...chatIdParameter,
		displayOptions: {
			show: {
				resource: ['chatMessages'],
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
				resource: ['chatMessages'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				description: 'ID of the last message from previous page. Used for pagination.',
			},
			{
				displayName: 'Order',
				name: 'order',
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
				description: 'Sort order for messages',
			},
			{
				displayName: 'Skip Users',
				name: 'skip_users',
				type: 'options',
				default: 'none',
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
				description: 'Whether to skip user details',
			},
		],
	},
];
