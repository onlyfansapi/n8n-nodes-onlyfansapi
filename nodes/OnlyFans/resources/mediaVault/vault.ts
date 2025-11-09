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
			displayName: 'Optionally, Search for a Text Query',
			name: 'query',
			type: 'string',
			default: 'Hi',
		},
		{
			displayName: 'Sort the Results by a Field',
			name: 'field',
			type: 'string',
			default: 'recent',
			description: 'Sort the results by a field. Default `recent`.',
		},
		{
			displayName: 'Filter the Results by a Media Type',
			name: 'type',
			type: 'string',
			default: 'photo',
			description: 'Filter the results by a media type. Keep empty to show all media.',
		},
		{
			displayName: 'Only Show Media Items From a Specific List (Category)',
			name: 'list',
			type: 'number',
			default: 123456789,
			description: 'Only show media items from a specific list (category). **Refer to our Media Vault Lists endpoints.**.',
		},
		{
			displayName: 'Sort the Results',
			name: 'sort',
			type: 'string',
			default: 'desc',
			description: 'Sort the results. Default `desc`.',
		},
		{
			displayName: 'Number of Media to Return per Page',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
		},
		{
			displayName: 'The Offset Used for Pagination',
			name: 'offset',
			type: 'number',
			default: 0,
			description: 'The offset used for pagination. Default `0`.',
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

