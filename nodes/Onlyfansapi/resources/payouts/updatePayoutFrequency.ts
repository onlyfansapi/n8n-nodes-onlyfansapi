import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const payoutsUpdatePayoutFrequencyDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['payouts'],
				operation: ['updatePayoutFrequency'],
			},
		},
	},
	{
		displayName: 'Withdrawal Period',
		name: 'withdrawalPeriod',
		type: 'options',
		required: true,
		default: 'manual',
		displayOptions: {
			show: {
				resource: ['payouts'],
				operation: ['updatePayoutFrequency'],
			},
		},
		options: [
			{
				name: 'Manual',
				value: 'manual',
			},
			{
				name: 'Monthly',
				value: 'monthly',
			},
			{
				name: 'Weekly',
				value: 'weekly',
			},
		],
		description: 'The payout frequency',
	},
];
