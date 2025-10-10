import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter } from './sharedParameters';

export const postsGetDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['get'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['get'],
			},
		},
	},
];

