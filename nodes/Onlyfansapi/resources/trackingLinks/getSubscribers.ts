import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, trackingLinkIdParameter } from './sharedParameters';

export const trackingLinksGetSubscribersDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
				operation: ['getSubscribers'],
			},
		},
	},
	{
		...trackingLinkIdParameter,
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
				operation: ['getSubscribers'],
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
				resource: ['trackingLinks'],
				operation: ['getSubscribers'],
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

