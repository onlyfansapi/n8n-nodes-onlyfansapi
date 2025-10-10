import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const payoutsGetEligibilityDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['payouts'],
				operation: ['getEligibility'],
			},
		},
	},
];
