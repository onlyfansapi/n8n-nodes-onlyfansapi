import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter } from './sharedParameters';

export const postsPinUnpinDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['pinUnpin'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['pinUnpin'],
			},
		},
	},
];

