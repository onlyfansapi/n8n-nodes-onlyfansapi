import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const savedForLaterPostsEnableAutomaticPostingDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['savedForLaterPosts'],
				operation: ['enableAutomaticPosting'],
			},
		},
	},
	{
		displayName: 'Period',
		name: 'period',
		type: 'options',
		required: true,
		default: 12,
		options: [
			{
				name: '6 Hours',
				value: 6,
			},
			{
				name: '12 Hours',
				value: 12,
			},
			{
				name: '24 Hours',
				value: 24,
			},
			{
				name: '48 Hours',
				value: 48,
			},
		],
		description: 'The automatic posting interval (in hours)',
		displayOptions: {
			show: {
				resource: ['savedForLaterPosts'],
				operation: ['enableAutomaticPosting'],
			},
		},
	},
];

