import type { INodeProperties } from 'n8n-workflow';
import { accountIdParameter, userListIdParameter } from './sharedParameters';

export const userListsUpdateDescription: INodeProperties[] = [
	{
		...accountIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['update'],
			},
		},
	},
	{
		...userListIdParameter,
		displayOptions: {
			show: {
				resource: ['userLists'],
				operation: ['update'],
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
				resource: ['userLists'],
				operation: ['update'],
			},
		},
		description: 'New name for the user list (max 64 characters)',
	},
];
