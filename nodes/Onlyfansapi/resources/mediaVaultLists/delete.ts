import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, listIdParameter } from './sharedParameters';

export const mediaVaultListsDeleteDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['delete'],
			},
		},
	},
	{
		...listIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['delete'],
			},
		},
	},
];
