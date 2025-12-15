import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listVaultMediaResource: INodeProperties[] = [
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
		description: 'Optional parameters to filter and sort vault media',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Field',
				name: 'field',
				type: 'string',
				default: 'recent',
				description: 'Sort the results by a field. Default `recent`.',
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
				displayName: 'List',
				name: 'list',
				type: 'number',
				default: '0',
				default: undefined as unknown as number,
				description: 'Only show media items from a specific list (category). Refer to Media Vault Lists endpoints.',
			},
			{
				displayName: 'Media Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'Filter the results by a media type. Keep empty to show all media.',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'The offset used for pagination. Default `0`.',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Optionally, search for a text query',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: 'desc',
				description: 'Sort the results. Default `desc`.',
			},
		],
	},
];

export const listVaultMediaOperation = {
	name: 'listVaultMedia',
	displayName: 'List Vault Media',
	method: 'GET' as const,
	parameters: listVaultMediaResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

