import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listUserListUsersResource: INodeProperties[] = [
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

export const listUserListUsersOperation = {
	name: 'listUserListUsers',
	displayName: 'List User List Users',
	method: 'GET' as const,
	parameters: listUserListUsersResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const addUsersToUserListResource: INodeProperties[] = [
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
			displayName: 'Array of OnlyFans User IDs to Be Added Into the List',
			name: 'ids',
			type: 'string',
			default: '123456,44112233,22113344',
			required: true,
		},
];

export const addUsersToUserListOperation = {
	name: 'addUsersToUserList',
	displayName: 'Add Users to User List',
	method: 'POST' as const,
	parameters: addUsersToUserListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const clearUserListResource: INodeProperties[] = [
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

export const clearUserListOperation = {
	name: 'clearUserList',
	displayName: 'Clear User List',
	method: 'DELETE' as const,
	parameters: clearUserListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

