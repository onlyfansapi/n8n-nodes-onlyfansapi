import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, trialLinkIdParameter } from './sharedParameters';

export const freeTrialLinksListFreeTrialLinkSpendersDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['listFreeTrialLinkSpenders'],
			},
		},
	},
	{
		...trialLinkIdParameter,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['listFreeTrialLinkSpenders'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['listFreeTrialLinkSpenders'],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Min Spend',
				name: 'minSpend',
				type: 'number',
				default: 1,
				description: 'Minimal spend of a fan. Default 1.',
				typeOptions: {
					minValue: 1,
				},
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'The offset used for pagination',
			},
		],
	},
];
