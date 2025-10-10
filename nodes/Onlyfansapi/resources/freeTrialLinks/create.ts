import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const freeTrialLinksCreateDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Subscribe Days',
		name: 'subscribeDays',
		type: 'number',
		required: true,
		default: 7,
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['create'],
			},
		},
		description: 'Number of days for the trial subscription',
		typeOptions: {
			minValue: 1,
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['freeTrialLinks'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Expired At',
				name: 'expiredAt',
				type: 'dateTime',
				default: '',
				description: 'When the trial link should expire',
			},
			{
				displayName: 'Subscribe Counts',
				name: 'subscribeCounts',
				type: 'number',
				default: '',
				description: 'Maximum number of subscribers allowed',
			},
			{
				displayName: 'Trial Link Name',
				name: 'trialLinkName',
				type: 'string',
				default: '',
				description: 'Name for the trial link',
			},
		],
	},
];
