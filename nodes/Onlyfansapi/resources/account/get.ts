import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from '../sharedParameters';

export const accountGetDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['get'],
			},
		},
	},
];