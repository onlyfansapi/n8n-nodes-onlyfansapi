import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, postIdParameter } from './sharedParameters';

export const postsShowStatisticsDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['showStatistics'],
			},
		},
	},
	{
		...postIdParameter,
		displayOptions: {
			show: {
				resource: ['posts'],
				operation: ['showStatistics'],
			},
		},
	},
];

