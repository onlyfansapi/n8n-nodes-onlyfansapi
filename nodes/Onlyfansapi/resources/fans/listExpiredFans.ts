import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, fansOptionsParameter, fansFilterParameter } from './sharedParameters';

export const fansListExpiredFansDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listExpiredFans'],
			},
		},
	},
	{
		...fansOptionsParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listExpiredFans'],
			},
		},
	},
	{
		...fansFilterParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listExpiredFans'],
			},
		},
	},
];
