import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter, commentIdParameter } from './sharedParameters';

export const postCommentsPinDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['pin'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['pin'],
			},
		},
	},
	{
		...commentIdParameter,
		displayOptions: {
			show: {
				resource: ['postComments'],
				operation: ['pin'],
			},
		},
	},
];

