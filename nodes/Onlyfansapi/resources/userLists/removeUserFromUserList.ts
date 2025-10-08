import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, userListIdParameter } from './sharedParameters';

export const userListsRemoveUserFromUserListDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['removeUserFromUserList'],
			},
		},
	},
	{
		...userListIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['removeUserFromUserList'],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['removeUserFromUserList'],
			},
		},
		description: 'The User ID to remove from the list',
	},
];
