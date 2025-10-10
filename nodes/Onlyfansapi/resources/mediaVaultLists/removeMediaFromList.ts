import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, listIdParameter } from './sharedParameters';

export const mediaVaultListsRemoveMediaFromListDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['removeMediaFromList'],
			},
		},
	},
	{
		...listIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['removeMediaFromList'],
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
				operation: ['removeMediaFromList'],
			},
		},
		description: 'Array of media IDs to delete, e.g., ["1234567890", "9876543210"]',
	},
];
