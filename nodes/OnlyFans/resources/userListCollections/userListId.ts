import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getUserListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The userListId',
			name: 'userListId',
			type: 'string',
			default: '',
			required: true,
			description: 'The userListId',
		},
];

export const getUserListOperation = {
	name: 'getUserList',
	displayName: 'Get User List',
	method: 'GET' as const,
	parameters: getUserListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const updateUserListResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'The userListId',
		name: 'userListId',
		type: 'string',
		default: '',
		required: true,
		description: 'The userListId',
	},
	{
		displayName: 'The New Name for the User List',
		name: 'name',
		type: 'string',
		default: 'My Updated List Name',
		required: true,
		description: 'The new name for the User List',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when updating a user list',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Pinned to Feed',
				name: 'isPinnedToFeed',
				type: 'boolean',
				default: true,
				description: 'Whether to pin the user list to feed on the OnlyFans homepage or not',
			},
		],
	},
];

export const updateUserListOperation = {
	name: 'updateUserList',
	displayName: 'Update User List',
	method: 'PUT' as const,
	parameters: updateUserListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const deleteUserListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The userListId',
			name: 'userListId',
			type: 'string',
			default: '',
			required: true,
			description: 'The userListId',
		},
];

export const deleteUserListOperation = {
	name: 'deleteUserList',
	displayName: 'Delete User List',
	method: 'DELETE' as const,
	parameters: deleteUserListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

