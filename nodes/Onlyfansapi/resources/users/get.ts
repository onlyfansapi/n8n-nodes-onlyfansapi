import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const usersGetDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		default: '',
		description: 'The OnlyFans username',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['get'],
			},
		},
	},
];

