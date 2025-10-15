import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, trackingLinkIdParameter } from './sharedParameters';

export const trackingLinksDeleteDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
				operation: ['delete'],
			},
		},
	},
	{
		...trackingLinkIdParameter,
		displayOptions: {
			show: {
				resource: ['trackingLinks'],
				operation: ['delete'],
			},
		},
	},
];

