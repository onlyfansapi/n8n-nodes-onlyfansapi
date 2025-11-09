import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const showVaultListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The List ID',
			name: 'list_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The list ID',
		},
];

export const showVaultListOperation = {
	name: 'showVaultList',
	displayName: 'Show Vault List',
	method: 'GET' as const,
	parameters: showVaultListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const renameVaultListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The List ID',
			name: 'list_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The list ID',
		},
];

export const renameVaultListOperation = {
	name: 'renameVaultList',
	displayName: 'Rename Vault List',
	method: 'PUT' as const,
	parameters: renameVaultListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const deleteVaultListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The List ID',
			name: 'list_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The list ID',
		},
];

export const deleteVaultListOperation = {
	name: 'deleteVaultList',
	displayName: 'Delete Vault List',
	method: 'DELETE' as const,
	parameters: deleteVaultListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

