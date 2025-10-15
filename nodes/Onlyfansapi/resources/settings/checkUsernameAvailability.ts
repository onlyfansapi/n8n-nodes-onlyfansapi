import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const settingsCheckUsernameAvailabilityDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['checkUsernameAvailability'],
			},
		},
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		default: '',
		description: 'The username to check for availability',
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['checkUsernameAvailability'],
			},
		},
	},
];

