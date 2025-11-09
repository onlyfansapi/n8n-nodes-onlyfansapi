import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const addMediaToListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The List ID',
			name: 'list_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The list ID',
		},
		{
			displayName: 'Array of Media IDs to Add',
			name: 'mediaIds',
			type: 'string',
			default: '1234567890',
			required: true,
		},
];

export const addMediaToListOperation = {
	name: 'addMediaToList',
	displayName: 'Add Media To List',
	method: 'POST' as const,
	parameters: addMediaToListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const removeMediaFromListResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The List ID',
			name: 'list_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The list ID',
		},
		{
			displayName: 'Array of Media IDs to Delete',
			name: 'mediaIds',
			type: 'string',
			default: '1234567890',
			required: true,
		},
];

export const removeMediaFromListOperation = {
	name: 'removeMediaFromList',
	displayName: 'Remove Media From List',
	method: 'DELETE' as const,
	parameters: removeMediaFromListResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

