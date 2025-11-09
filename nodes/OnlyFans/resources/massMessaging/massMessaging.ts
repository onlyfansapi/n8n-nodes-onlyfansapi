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
			displayName: 'Array of User List IDs that the Mass Message Will Be Sent To',
			name: 'userLists',
			type: 'string',
			default: 'fans,recent,following,rebill_off,tagged,1234567890',
		},
		{
			displayName: 'Array of User IDs that the Mass Message Will Be Sent To',
			name: 'userIds',
			type: 'string',
			default: '1234567890',
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
			displayName: 'Whether the Text Should Be Shown or Hidden',
			name: 'lockedText',
			type: 'boolean',
			default: true,
		},
		{
			displayName: 'Price for Paid Content (0 or Between 3-200)',
			name: 'price',
			type: 'number',
			default: 100,
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
			displayName: 'Schedule the Chat Message in the Future (UTC Timezone)',
			name: 'scheduledDate',
			type: 'string',
			default: '2025-01-01T00:00:00.000Z',
		},
		{
			displayName: 'Add Your Message to the "Saved for Later" Queue',
			name: 'saveForLater',
			type: 'boolean',
			default: true,
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

