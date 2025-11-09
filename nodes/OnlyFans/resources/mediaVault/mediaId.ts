import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getVaultMediaResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Media ID',
			name: 'media_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The media ID',
		},
];

export const getVaultMediaOperation = {
	name: 'getVaultMedia',
	displayName: 'Get Vault Media',
	method: 'GET' as const,
	parameters: getVaultMediaResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

