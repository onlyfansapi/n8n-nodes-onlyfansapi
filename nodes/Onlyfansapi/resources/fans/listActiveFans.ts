import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, fansOptionsParameter, fansFilterParameter } from './sharedParameters';

export const fansListActiveFansDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listActiveFans'],
			},
		},
	},
	{
		...fansOptionsParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listActiveFans'],
			},
		},
	},
	{
		...fansFilterParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['listActiveFans'],
			},
		},
	},
];
