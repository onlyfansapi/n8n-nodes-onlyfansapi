import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, listIdParameter } from './sharedParameters';

export const mediaVaultListsRenameDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['rename'],
			},
		},
	},
	{
		...listIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['rename'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['rename'],
			},
		},
		description: 'The new name for the list',
	},
];
