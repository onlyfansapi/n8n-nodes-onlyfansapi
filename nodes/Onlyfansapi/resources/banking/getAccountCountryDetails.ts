import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const bankingGetAccountCountryDetailsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['banking'],
				operation: ['getAccountCountryDetails'],
			},
		},
	},
];
