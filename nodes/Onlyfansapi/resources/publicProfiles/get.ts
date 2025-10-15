import type { INodeProperties } from 'n8n-workflow';

export const publicProfilesGetDescription: INodeProperties[] = [
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		required: true,
		default: '',
		description: 'The username of the profile to get',
		displayOptions: {
			show: {
				resource: ['publicProfiles'],
				operation: ['get'],
			},
		},
	},
];

