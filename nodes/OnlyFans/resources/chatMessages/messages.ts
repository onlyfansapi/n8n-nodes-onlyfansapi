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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters to filter and paginate chat messages',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: 'pinned',
				description: 'Filter by certain messages. Currently, only pins are filterable.',
			},
			{
				displayName: 'First Message ID',
				name: 'first_id',
				type: 'string',
				default: '',
				description: 'Include this message ID as the first message in the results',
			},
			{
				displayName: 'Last Message ID',
				name: 'id',
				type: 'string',
				default: '',
				description: 'ID of the last message from previous page, used for pagination',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'string',
				default: 'desc',
				description: 'Sort order for messages (desc or asc)',
			},
			{
				displayName: 'Skip Users',
				name: 'skip_users',
				type: 'string',
				default: 'all',
				description: 'Whether to skip user details (all or none)',
			},
		],
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when sending a message',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Locked Text',
				name: 'lockedText',
				type: 'boolean',
				default: false,
				description: 'Whether the text should be shown or hidden',
			},
			{
				displayName: 'Media Files',
				name: 'mediaFiles',
				type: 'string',
				default: '',
				description: 'Array of media file upload prefixed_ids, or OF media IDs. Hidden if price is provided.',
			},
			{
				displayName: 'Previews',
				name: 'previews',
				type: 'string',
				default: '',
				description: 'Array of media IDs used as previews. All values must also exist in mediaFiles.',
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: 0,
				description: 'Price for paid content (0 or between 3-200). If not zero, mediaFiles is required.',
			},
			{
				displayName: 'Reply To Message ID',
				name: 'replyToMessageId',
				type: 'number',
				default: 0,
				description: 'Mark this message as a reply to another message',
			},
			{
				displayName: 'Tagged User IDs',
				name: 'rfTag',
				type: 'string',
				default: '',
				description: 'Array of OnlyFans creator user IDs to tag in your message',
			},
		],
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

