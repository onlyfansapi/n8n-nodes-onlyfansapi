import type { INodeProperties } from 'n8n-workflow';

export const connectOnlyfansAccountPollAuthenticationStatusDescription: INodeProperties[] = [
	{
		displayName: 'Attempt ID',
		name: 'attemptId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['connectOnlyfansAccount'],
				operation: ['pollAuthenticationStatus'],
			},
		},
		description: 'The attempt ID of the authentication process',
	},
];


