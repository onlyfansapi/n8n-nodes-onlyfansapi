import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter, commentIdParameter } from './sharedParameters';

export const postCommentsDeleteDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['delete'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['delete'],
			},
		},
	},
	{
		...commentIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['delete'],
			},
		},
	},
];

