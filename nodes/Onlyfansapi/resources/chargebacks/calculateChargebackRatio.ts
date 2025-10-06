import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, startDateParameter, endDateParameter } from './sharedParameters';

export const chargebacksCalculateChargebackRatioDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
				operation: ['calculateChargebackRatio'],
			},
		},
	},
	{
		...startDateParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
				operation: ['calculateChargebackRatio'],
			},
		},
	},
	{
		...endDateParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
				operation: ['calculateChargebackRatio'],
			},
		},
	},
];
