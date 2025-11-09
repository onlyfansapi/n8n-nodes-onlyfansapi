import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listChatMediaGalleryResource: INodeProperties[] = [
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
			displayName: 'Filter by Specific Media Types',
			name: 'type',
			type: 'string',
			default: 'claims',
			description: 'Filter by specific media types. Keep empty to return all.',
		},
		{
			displayName: 'Number of Medias to Return',
			name: 'limit',
			type: 'string',
			default: '20',
			description: 'Number of medias to return. Default = 20.',
		},
		{
			displayName: 'Number of Medias to Skip for Pagination',
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
];

export const listChatMediaGalleryOperation = {
	name: 'listChatMediaGallery',
	displayName: 'List Chat Media (Gallery)',
	method: 'GET' as const,
	parameters: listChatMediaGalleryResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

