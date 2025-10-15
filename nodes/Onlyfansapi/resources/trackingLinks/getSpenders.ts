import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, trackingLinkIdParameter } from './sharedParameters';

export const trackingLinksGetSpendersDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
				operation: ['getSpenders'],
			},
		},
	},
	{
		...trackingLinkIdParameter,
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
				operation: ['getSpenders'],
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
				operation: ['getSpenders'],
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

