import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter, commentIdParameter } from './sharedParameters';

export const postCommentsLikeDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['like'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['like'],
			},
		},
	},
	{
		...commentIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['like'],
			},
		},
	},
];

