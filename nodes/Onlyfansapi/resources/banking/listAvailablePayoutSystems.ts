import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const bankingListAvailablePayoutSystemsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['banking'],
				operation: ['listAvailablePayoutSystems'],
			},
		},
	},
];
