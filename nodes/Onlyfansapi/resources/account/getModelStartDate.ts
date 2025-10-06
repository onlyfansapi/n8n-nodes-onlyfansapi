import type { INodeProperties } from 'n8n-workflow';

export const accountGetModelStartDateDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getModelStartDate'],
			},
		},
		default: '',
	},
];
