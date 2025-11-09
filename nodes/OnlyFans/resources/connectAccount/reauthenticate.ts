import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const reAuthenticateAccountResource: INodeProperties[] = [
		{
			displayName: 'The Account ID',
			name: 'account_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The account ID',
		},
];

export const reAuthenticateAccountOperation = {
	name: 'reAuthenticateAccount',
	displayName: 'Re-authenticate Account',
	method: 'POST' as const,
	parameters: reAuthenticateAccountResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

