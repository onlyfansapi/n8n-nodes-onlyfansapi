import type { INodeProperties } from 'n8n-workflow';

export const accountGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'OnlyFans ID',
				name: 'onlyfans_id',
				type: 'string',
				default: '',
				description: 'Filter by the OnlyFans ID',
			},
			{
				displayName: 'OnlyFans Username',
				name: 'onlyfans_username',
				type: 'string',
				default: '',
				description: 'Filter by the OnlyFans username',
			},
			{
				displayName: 'OnlyFans Email',
				name: 'onlyfans_email',
				type: 'string',
				default: '',
				description: 'Filter by the OnlyFans email',
			},
		],
	},
];
