import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const searchProfilesResource: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional filters when searching public profiles',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Instagram',
				name: 'instagram',
				type: 'string',
				default: '',
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
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Maximum Subscribe Price',
				name: 'max_subscribe_price',
				type: 'number',
				default: 0,
				description: 'Maximum subscribe price; must be at least 0.00',
			},
			{
				displayName: 'Minimum Subscribe Price',
				name: 'min_subscribe_price',
				type: 'number',
				default: 0,
				description: 'Minimum subscribe price; must be at least 0.00',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Full text search in username, display name, and bio (min 3 characters recommended)',
			},
			{
				displayName: 'TikTok',
				name: 'tiktok',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
			},
		],
	},
];

export const searchProfilesOperation = {
	name: 'searchProfiles',
	displayName: 'Search Profiles',
	method: 'GET' as const,
	parameters: searchProfilesResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

