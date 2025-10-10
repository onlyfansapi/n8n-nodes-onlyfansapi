import type { INodeProperties } from 'n8n-workflow';

export const connectOnlyfansAccountSubmit2FADescription: INodeProperties[] = [
	{
		displayName: 'Attempt ID',
		name: 'attemptId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['connectOnlyfansAccount'],
				operation: ['submit2FA'],
			},
		},
		description: 'The attempt ID of the authentication process',
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['connectOnlyfansAccount'],
				operation: ['submit2FA'],
			},
		},
		description: 'The 2FA code you received on your phone',
	},
];

