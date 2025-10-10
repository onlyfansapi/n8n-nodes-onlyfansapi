import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, listIdParameter } from './sharedParameters';

export const mediaVaultListsAddMediaToListDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['addMediaToList'],
			},
		},
	},
	{
		...listIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['addMediaToList'],
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
				resource: ['mediaVaultLists'],
				operation: ['addMediaToList'],
			},
		},
		description: 'Array of media IDs to add, e.g., ["1234567890", "9876543210"]',
	},
];
