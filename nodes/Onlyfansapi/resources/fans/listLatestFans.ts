import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, fansOptionsParameter, fansFilterParameter } from './sharedParameters';

export const fansListLatestFansDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listLatestFans'],
			},
		},
	},
	{
		...fansOptionsParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listLatestFans'],
			},
		},
	},
	{
		...fansFilterParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listLatestFans'],
			},
		},
	},
];
