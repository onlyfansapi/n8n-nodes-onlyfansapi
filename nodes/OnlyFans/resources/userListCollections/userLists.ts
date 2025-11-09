import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listUserListsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'How Many Results to Return in the Request',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
		},
		{
			displayName: 'Must Be at Least 0',
			name: 'offset',
			type: 'number',
			default: 0,
		},
];

export const listUserListsOperation = {
	name: 'listUserLists',
	displayName: 'List User Lists',
	method: 'GET' as const,
	parameters: listUserListsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const createUserListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Must Not Be Greater than 64 Characters',
			name: 'name',
			type: 'string',
			default: 'szk',
			required: true,
		},
];

export const createUserListOperation = {
	name: 'createUserList',
	displayName: 'Create User List',
	method: 'POST' as const,
	parameters: createUserListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

