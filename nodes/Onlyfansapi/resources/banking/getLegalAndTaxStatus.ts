import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const bankingGetLegalAndTaxStatusDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['banking'],
				operation: ['getLegalAndTaxStatus'],
			},
		},
	},
];
