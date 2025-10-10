import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, fansOptionsParameter, fansFilterParameter } from './sharedParameters';

export const fansListAllFansDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listAllFans'],
			},
		},
	},
	{
		...fansOptionsParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listAllFans'],
			},
		},
	},
	{
		...fansFilterParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listAllFans'],
			},
		},
	},
];
