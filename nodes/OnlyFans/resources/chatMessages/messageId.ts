import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const deleteMessageResource: INodeProperties[] = [
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
			displayName: 'The Message ID',
			name: 'message_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The message ID',
		},
];

export const deleteMessageOperation = {
	name: 'deleteMessage',
	displayName: 'Delete Message',
	method: 'DELETE' as const,
	parameters: deleteMessageResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

