import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, trialLinkIdParameter } from './sharedParameters';

export const freeTrialLinksDeleteDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['delete'],
			},
		},
	},
	{
		...trialLinkIdParameter,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['delete'],
			},
		},
	},
];
