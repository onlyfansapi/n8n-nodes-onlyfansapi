import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listChatsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Number of Chats to Return (1 - 100)',
			name: 'limit',
			type: 'string',
			default: '10',
			description: 'Number of chats to return (1 - 100). Default = 10.',
		},
		{
			displayName: 'Number of Chats to Skip for Pagination',
			name: 'offset',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Whether to Skip User Details in Response (All or None)',
			name: 'skip_users',
			type: 'string',
			default: 'all',
			description: 'Whether to skip user details in response (all or none). Default = all.',
		},
		{
			displayName: 'Sort Order for Chats (Recent or Old)',
			name: 'order',
			type: 'string',
			default: 'recent',
			description: 'Sort order for chats (recent or old). Default = recent.',
		},
		{
			displayName: 'Optionally, Filter the Chats by Type',
			name: 'filter',
			type: 'string',
			default: 'with_tips',
		},
		{
			displayName: 'Search Query to Filter Chats',
			name: 'query',
			type: 'string',
			default: 'John',
		},
];

export const listChatsOperation = {
	name: 'listChats',
	displayName: 'List Chats',
	method: 'GET' as const,
	parameters: listChatsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

