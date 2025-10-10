import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, followingOptionsParameter, followingFilterParameter } from './sharedParameters';

export const followingListActiveFollowingsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listActiveFollowings'],
			},
		},
	},
	{
		...followingOptionsParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listActiveFollowings'],
			},
		},
	},
	{
		...followingFilterParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listActiveFollowings'],
			},
		},
	},
];
