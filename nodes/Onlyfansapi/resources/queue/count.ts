import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const queueCountDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['count'],
			},
		},
	},
	{
		displayName: 'Publish Date Start',
		name: 'publishDateStart',
		type: 'string',
		required: true,
		default: '',
		description: 'Earliest publish date to count from (must be at least today)',
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['count'],
			},
		},
	},
	{
		displayName: 'Publish Date End',
		name: 'publishDateEnd',
		type: 'string',
		required: true,
		default: '',
		description: 'Latest publish date to count to',
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['count'],
			},
		},
	},
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		required: true,
		default: 'UTC',
		description: 'Time timezone of the provided dates (e.g., Europe/Prague, America/New_York, UTC)',
		displayOptions: {
			show: {
				resource: ['queue'],
				operation: ['count'],
			},
		},
	},
];

