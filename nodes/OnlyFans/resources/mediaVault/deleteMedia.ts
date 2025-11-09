import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const deleteVaultMediaResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Array of Media IDs to Delete',
			name: 'mediaIds',
			type: 'string',
			default: '1234567890',
			required: true,
		},
];

export const deleteVaultMediaOperation = {
	name: 'deleteVaultMedia',
	displayName: 'Delete Vault Media',
	method: 'DELETE' as const,
	parameters: deleteVaultMediaResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

