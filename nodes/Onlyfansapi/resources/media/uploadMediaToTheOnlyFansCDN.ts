import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const mediaUploadMediaToTheOnlyFansCDNDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['uploadMediaToTheOnlyFansCDN'],
			},
		},
	},
	{
		displayName: 'File',
		name: 'file',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['uploadMediaToTheOnlyFansCDN'],
			},
		},
		description: 'The file to upload. This should be a binary data reference from a previous node (e.g., using expressions like $binary.data).',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['media'],
				operation: ['uploadMediaToTheOnlyFansCDN'],
			},
		},
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'default',
				options: [
					{
						name: 'Avatar',
						value: 'avatar',
					},
					{
						name: 'Default',
						value: 'default',
					},
					{
						name: 'Header',
						value: 'header',
					},
				],
				description:
					'Set to avatar if this file will be used as a profile picture, header for a profile banner, or keep default if this file will be for anything else',
			},
		],
	},
];
