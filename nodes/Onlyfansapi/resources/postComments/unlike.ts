import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter, commentIdParameter } from './sharedParameters';

export const postCommentsUnlikeDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['unlike'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['unlike'],
			},
		},
	},
	{
		...commentIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['unlike'],
			},
		},
	},
];

