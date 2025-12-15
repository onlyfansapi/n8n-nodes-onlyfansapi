import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const searchChatMessagesResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
	{
		displayName: 'The Chat ID',
		name: 'chat_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The chat ID',
	},
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		description: 'The query search in messages',
	},
];

export const searchChatMessagesOperation = {
	name: 'searchChatMessages',
	displayName: 'Search Chat Messages',
	method: 'GET' as const,
	parameters: searchChatMessagesResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

