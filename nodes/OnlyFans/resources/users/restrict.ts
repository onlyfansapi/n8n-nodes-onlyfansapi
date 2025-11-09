import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const restrictUserResource: INodeProperties[] = [
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

export const restrictUserOperation = {
	name: 'restrictUser',
	displayName: 'Restrict User',
	method: 'POST' as const,
	parameters: restrictUserResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const unrestrictUserResource: INodeProperties[] = [
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

export const unrestrictUserOperation = {
	name: 'unrestrictUser',
	displayName: 'Unrestrict User',
	method: 'DELETE' as const,
	parameters: unrestrictUserResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

