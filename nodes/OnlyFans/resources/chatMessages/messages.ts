import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listChatMessagesResource: INodeProperties[] = [
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
			displayName: 'Filter by Certain Messages',
			name: 'filter',
			type: 'string',
			default: 'pinned',
			description: 'Filter by certain messages. Currently, only pins are filterable.',
		},
		{
			displayName: 'ID of the Last Message From Previous Page',
			name: 'id',
			type: 'string',
			default: '123',
			description: 'ID of the last message from previous page. Used for pagination.',
		},
		{
			displayName: 'Include This Message ID as the First Message in the Results',
			name: 'first_id',
			type: 'string',
			default: '123',
			description: 'Include this message ID as the first message in the results. Used to retrieve messages from e.g. the Search Chat Messages endpoint IDs.',
		},
		{
			displayName: 'Sort Order for Messages (Desc or Asc)',
			name: 'order',
			type: 'string',
			default: 'desc',
		},
		{
			displayName: 'Whether to Skip User Details (All or None)',
			name: 'skip_users',
			type: 'string',
			default: 'all',
		},
];

export const listChatMessagesOperation = {
	name: 'listChatMessages',
	displayName: 'List Chat Messages',
	method: 'GET' as const,
	parameters: listChatMessagesResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const sendMessageResource: INodeProperties[] = [
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
			displayName: 'The Message Text Content',
			name: 'text',
			type: 'string',
			default: 'Hello!',
			required: true,
			description: 'The message text content',
		},
		{
			displayName: 'Mark This Message as a Reply to Another (Can Be Either Your Own, or the Recipient\'s)',
			name: 'replyToMessageId',
			type: 'number',
			default: 123456789,
		},
		{
			displayName: 'Whether the Text Should Be Shown or Hidden',
			name: 'lockedText',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Price for Paid Content (0 or Between 3-200)',
			name: 'price',
			type: 'number',
			default: 10,
			description: 'Price for paid content (0 or between 3-200). In case this is not zero, **mediaFiles** is required.',
		},
		{
			displayName: 'Array of Media File Upload Prefixed_ids, or OF Media IDs (Required if Price Is Not 0)',
			name: 'mediaFiles',
			type: 'string',
			default: 'ofapi_media_abc123,1234567890',
			description: 'Array of media file upload prefixed_ids, or OF media IDs (required if price is not 0). Will be hidden if `price` is provided.',
		},
		{
			displayName: 'Array of Media File Upload Prefixed_ids, or OF Media IDs (Required if Price Is Not 0)',
			name: 'previews',
			type: 'string',
			default: 'ofapi_media_abc123,1234567890',
			description: 'Array of media file upload prefixed_ids, or OF media IDs (required if price is not 0). Will be shown if `price` is provided. All `previews` values must also exist in the `mediaFiles` array.',
		},
		{
			displayName: 'Array OnlyFans Creator User IDs to Tag in Your Message',
			name: 'rfTag',
			type: 'string',
			default: '123',
		},
];

export const sendMessageOperation = {
	name: 'sendMessage',
	displayName: 'Send Message',
	method: 'POST' as const,
	parameters: sendMessageResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

