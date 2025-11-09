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
			displayName: 'Maximum Number of Posts to Return (Default = 10)',
			name: 'limit',
			type: 'number',
			description: 'Max number of results to return',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			required: true,
		},
		{
			displayName: 'Offset for Pagination (Default = 0)',
			name: 'offset',
			type: 'number',
			default: 0,
			required: true,
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

