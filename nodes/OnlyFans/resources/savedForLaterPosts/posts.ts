import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listSavedForLaterPostsResource: INodeProperties[] = [
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
		description: 'Optional parameters when listing saved-for-later posts',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
				default: 50,
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'number',
				default: 0,
				description: 'Offset for pagination (default 0)',
			},
		],
	},
];

export const listSavedForLaterPostsOperation = {
	name: 'listSavedForLaterPosts',
	displayName: 'List Saved For Later Posts',
	method: 'GET' as const,
	parameters: listSavedForLaterPostsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

