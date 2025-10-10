import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, followingOptionsParameter, followingFilterParameter } from './sharedParameters';

export const followingListAllFollowingsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listAllFollowings'],
			},
		},
	},
	{
		...followingOptionsParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listAllFollowings'],
			},
		},
	},
	{
		...followingFilterParameter,
		displayOptions: {
			show: {
				resource: ['following'],
				operation: ['listAllFollowings'],
			},
		},
	},
];
