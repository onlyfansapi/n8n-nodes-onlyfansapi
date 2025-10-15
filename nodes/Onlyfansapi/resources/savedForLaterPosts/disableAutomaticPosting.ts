import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const savedForLaterPostsDisableAutomaticPostingDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['savedForLaterPosts'],
				operation: ['disableAutomaticPosting'],
			},
		},
	},
];

