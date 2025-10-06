import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const bankingGetDAC7FormDetailsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['banking'],
				operation: ['getDAC7FormDetails'],
			},
		},
	},
];
