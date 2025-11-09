import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const blockUserResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The User ID',
			name: 'user_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The user ID',
		},
];

export const blockUserOperation = {
	name: 'blockUser',
	displayName: 'Block User',
	method: 'POST' as const,
	parameters: blockUserResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const unblockUserResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The User ID',
			name: 'user_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The user ID',
		},
];

export const unblockUserOperation = {
	name: 'unblockUser',
	displayName: 'Unblock User',
	method: 'DELETE' as const,
	parameters: unblockUserResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

