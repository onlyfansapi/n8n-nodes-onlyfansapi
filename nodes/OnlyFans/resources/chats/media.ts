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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters to filter and paginate chat media',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: 'claims',
				description: 'Filter by specific media types. Keep empty to return all.',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'string',
				default: '20',
				description: 'Number of medias to return. Default = 20.',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'string',
				default: '',
				description: 'Number of medias to skip for pagination',
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

