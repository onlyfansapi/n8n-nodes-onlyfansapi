import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, userListIdParameter } from './sharedParameters';

export const userListsGetUsersInListDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['getUsersInList'],
			},
		},
	},
	{
		...userListIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['getUsersInList'],
			},
		},
	},
];

