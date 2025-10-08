import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, userListIdParameter } from './sharedParameters';

export const userListsAddUsersToUserListDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['addUsersToUserList'],
			},
		},
	},
	{
		...userListIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['addUsersToUserList'],
			},
		},
	},
	{
		displayName: 'User IDs',
		name: 'user_ids',
		type: 'json',
		required: true,
		default: '[]',
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['addUsersToUserList'],
			},
		},
		description: 'Array of User IDs to add to the list, e.g., ["123456", "789012"]',
	},
];
