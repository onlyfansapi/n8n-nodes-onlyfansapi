import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, fanIdParameter } from './sharedParameters';

export const fansSetCustomNameDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['setCustomName'],
			},
		},
	},
	{
		...fanIdParameter,
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['setCustomName'],
			},
		},
	},
	{
		displayName: 'Custom Name',
		name: 'custom_name',
		type: 'string',
		required: true,
		default: '',
		description: "New custom name for the fan (shown in your OnlyFans account)",
		displayOptions: {
			show: {
				resource: ['fans'],
				operation: ['setCustomName'],
			},
		},
	},
];

