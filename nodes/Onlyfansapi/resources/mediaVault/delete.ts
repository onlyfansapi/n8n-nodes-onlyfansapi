import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter } from './sharedParameters';

export const mediaVaultDeleteDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVault'],
				operation: ['delete'],
			},
		},
	},
	{
		displayName: 'Media IDs',
		name: 'mediaIds',
		type: 'json',
		required: true,
		default: '[]',
		displayOptions: {
			show: {
				resource: ['mediaVault'],
				operation: ['delete'],
			},
		},
		description: 'Array of media IDs to delete from your vault, e.g., ["123", "456"]',
	},
];
