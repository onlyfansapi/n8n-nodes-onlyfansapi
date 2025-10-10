import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, listIdParameter } from './sharedParameters';

export const mediaVaultListsGetDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['get'],
			},
		},
	},
	{
		...listIdParameter,
		displayOptions: {
			show: {
				resource: ['mediaVaultLists'],
				operation: ['get'],
			},
		},
	},
];
