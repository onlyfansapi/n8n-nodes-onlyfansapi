import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const searchProfilesResource: INodeProperties[] = [
		{
			displayName: 'Query for Full Text Search in Username, Display Name, Bio',
			name: 'query',
			type: 'string',
			default: 'milf',
			required: true,
		},
		{
			displayName: 'The Number of Profiles to Return',
			name: 'limit',
			type: 'string',
			default: '10',
			description: 'The number of profiles to return. For each returned profile we charge your account 1 credit. Default: `10`',
		},
		{
			displayName: 'Minimum Subscribe Price',
			name: 'min_subscribe_price',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Maximum Subscribe Price',
			name: 'max_subscribe_price',
			type: 'string',
			default: '1000000',
		},
		{
			displayName: 'Location',
			name: 'location',
			type: 'string',
			default: 'New York',
		},
		{
			displayName: 'Must Be at Least 3 Characters',
			name: 'query',
			type: 'string',
			default: 'uqjqinuhdkglladpqjkfvriwptwvsrchqcaipeyyaafamwxidfyedfgsmkubjvgslfjh',
		},
		{
			displayName: 'Must Be at Least 0',
			name: 'min_subscribe_price',
			type: 'number',
			default: 81,
			description: 'Must be at least 0.00',
		},
		{
			displayName: 'Must Be at Least 0',
			name: 'max_subscribe_price',
			type: 'number',
			default: 57,
			description: 'Must be at least 0.00',
		},
		{
			displayName: 'Location',
			name: 'location',
			type: 'string',
			default: 'eveniet',
		},
		{
			displayName: 'Website',
			name: 'website',
			type: 'string',
			default: 'expedita',
		},
		{
			displayName: 'Instagram',
			name: 'instagram',
			type: 'string',
			default: 'reiciendis',
		},
		{
			displayName: 'Tiktok',
			name: 'tiktok',
			type: 'string',
			default: 'cum',
		},
		{
			displayName: 'Must Be at Least 1',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
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

