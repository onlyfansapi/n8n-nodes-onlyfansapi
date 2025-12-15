import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listMassMessageQueueResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
	},
];

export const listMassMessageQueueOperation = {
	name: 'listMassMessageQueue',
	displayName: 'List Mass Message Queue',
	method: 'GET' as const,
	parameters: listMassMessageQueueResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const sendMassMessageResource: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account',
		type: 'string',
		default: '',
		required: true,
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
		description: 'Optional parameters when sending a mass message',
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
				description: 'Array of media file upload prefixed_ids, or OF media IDs',
			},
			{
				displayName: 'Previews',
				name: 'previews',
				type: 'string',
				default: '',
				description: 'Array of media IDs used as previews; all values must also exist in mediaFiles',
			},
			{
				displayName: 'Price',
				name: 'price',
				type: 'number',
				default: 0,
				description: 'Price for paid content (0 or between 3-200). If not zero, mediaFiles is required.',
			},
			{
				displayName: 'Save For Later',
				name: 'saveForLater',
				type: 'boolean',
				default: false,
				description: 'Whether to add your message to the "Saved for Later" queue',
			},
			{
				displayName: 'Scheduled Date',
				name: 'scheduledDate',
				type: 'string',
				default: '',
				description: 'Schedule the chat message in the future (UTC timezone)',
			},
			{
				displayName: 'User IDs',
				name: 'userIds',
				type: 'string',
				default: '',
				description: 'Array of user IDs that the mass message will be sent to',
			},
			{
				displayName: 'User Lists',
				name: 'userLists',
				type: 'string',
				default: '',
				description: 'Array of user list IDs that the mass message will be sent to',
			},
		],
	},
];

export const sendMassMessageOperation = {
	name: 'sendMassMessage',
	displayName: 'Send Mass Message',
	method: 'POST' as const,
	parameters: sendMassMessageResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

