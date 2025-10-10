import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, trialLinkIdParameter } from './sharedParameters';

export const freeTrialLinksListFreeTrialLinkSubscribersDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['listFreeTrialLinkSubscribers'],
			},
		},
	},
	{
		...trialLinkIdParameter,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['listFreeTrialLinkSubscribers'],
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
				operation: ['listFreeTrialLinkSubscribers'],
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
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'The offset used for pagination',
			},
		],
	},
];
