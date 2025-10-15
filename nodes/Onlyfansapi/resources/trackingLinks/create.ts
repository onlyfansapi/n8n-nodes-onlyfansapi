import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const trackingLinksCreateDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Campaign Name',
		name: 'campaignName',
		type: 'string',
		required: true,
		default: '',
		description: 'The name of the tracking link campaign',
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
				operation: ['create'],
			},
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
				resource: ['trackingLinks'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'End Date',
				name: 'endDate',
				type: 'string',
				default: '',
				description: 'Optional end date for the tracking link',
			},
		],
	},
];

