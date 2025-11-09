import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const removeUserFromAUserListResource: INodeProperties[] = [
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
			displayName: 'The userId',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			description: 'The userId',
		},
];

export const removeUserFromAUserListOperation = {
	name: 'removeUserFromAUserList',
	displayName: 'Remove User from a User List',
	method: 'DELETE' as const,
	parameters: removeUserFromAUserListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

