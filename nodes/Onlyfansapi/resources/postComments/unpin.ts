import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter, commentIdParameter } from './sharedParameters';

export const postCommentsUnpinDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['unpin'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['unpin'],
			},
		},
	},
	{
		...commentIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['unpin'],
			},
		},
	},
];

