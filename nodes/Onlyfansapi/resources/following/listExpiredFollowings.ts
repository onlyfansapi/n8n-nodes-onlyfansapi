import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, followingOptionsParameter, followingFilterParameter } from './sharedParameters';

export const followingListExpiredFollowingsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listExpiredFollowings'],
			},
		},
	},
	{
		...followingOptionsParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listExpiredFollowings'],
			},
		},
	},
	{
		...followingFilterParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listExpiredFollowings'],
			},
		},
	},
];
