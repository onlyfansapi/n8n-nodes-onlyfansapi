import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const settingsGetDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['get'],
			},
		},
	},
];

