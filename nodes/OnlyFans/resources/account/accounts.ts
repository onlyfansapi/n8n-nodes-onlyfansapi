import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listAccountsResource: INodeProperties[] = [
		{
			displayName: 'Optionally, Filter by the OnlyFans ID',
			name: 'onlyfans_id',
			type: 'string',
			default: '1234567890',
		},
		{
			displayName: 'Optionally, Filter by the OnlyFans Username',
			name: 'onlyfans_username',
			type: 'string',
			default: 'username',
		},
		{
			displayName: 'Optionally, Filter by the OnlyFans Email',
			name: 'onlyfans_email',
			type: 'string',
			default: 'creator@example.com',
		},
];

export const listAccountsOperation = {
	name: 'listAccounts',
	displayName: 'List Accounts',
	method: 'GET' as const,
	parameters: listAccountsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

