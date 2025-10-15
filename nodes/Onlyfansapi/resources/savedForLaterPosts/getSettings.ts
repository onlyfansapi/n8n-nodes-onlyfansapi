import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const savedForLaterPostsGetSettingsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['savedForLaterPosts'],
				operation: ['getSettings'],
			},
		},
	},
];

