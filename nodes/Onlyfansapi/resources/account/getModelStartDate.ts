import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from '../sharedParameters';

export const accountGetModelStartDateDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getModelStartDate'],
			},
		},
	},
];