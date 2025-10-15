import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, userListIdParameter } from './sharedParameters';

export const userListsGetDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['get'],
			},
		},
	},
	{
		...userListIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['get'],
			},
		},
	},
];

