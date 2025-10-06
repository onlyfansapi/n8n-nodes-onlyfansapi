import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, startDateParameter, endDateParameter } from './sharedParameters';

export const chargebacksListChargebackStatisticsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
				operation: ['listChargebackStatistics'],
			},
		},
	},
	{
		...startDateParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
				operation: ['listChargebackStatistics'],
			},
		},
	},
	{
		...endDateParameter,
		displayOptions: {
			show: {
				resource: ['chargebacks'],
				operation: ['listChargebackStatistics'],
			},
		},
	},
];
