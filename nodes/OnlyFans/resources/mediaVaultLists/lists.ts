import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listVaultListsResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters to filter and paginate vault lists',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Optionally, find a list by its name',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: 'Max number of results to return',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'The offset used for pagination. Default `0`.',
			},
		],
	},
];

export const listVaultListsOperation = {
	name: 'listVaultLists',
	displayName: 'List Vault Lists',
	method: 'GET' as const,
	parameters: listVaultListsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const createVaultListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Name of Your New List',
			name: 'name',
			type: 'string',
			default: 'My new list',
			required: true,
			description: 'The name of your new list',
		},
];

export const createVaultListOperation = {
	name: 'createVaultList',
	displayName: 'Create Vault List',
	method: 'POST' as const,
	parameters: createVaultListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

