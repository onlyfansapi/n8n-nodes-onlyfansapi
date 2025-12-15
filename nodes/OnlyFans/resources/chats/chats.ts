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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters to refine the chat list',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: 'with_tips',
				description: 'Optionally, filter the chats by type',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'string',
				default: '10',
				description: 'Number of chats to return (1 - 100). Default = 10.',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'string',
				default: '',
				description: 'Number of chats to skip for pagination',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'string',
				default: 'recent',
				description: 'Sort order for chats (recent or old). Default = recent.',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'Search query to filter chats',
			},
			{
				displayName: 'Skip Users',
				name: 'skip_users',
				type: 'string',
				default: 'all',
				description: 'Whether to skip user details in response (all or none). Default = all.',
			},
		],
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

