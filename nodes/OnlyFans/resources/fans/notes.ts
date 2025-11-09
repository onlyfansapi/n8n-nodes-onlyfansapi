import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getFanNotesResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Fan ID',
			name: 'fan_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The fan ID',
		},
];

export const getFanNotesOperation = {
	name: 'getFanNotes',
	displayName: 'Get Fan Notes',
	method: 'GET' as const,
	parameters: getFanNotesResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const createEditFanNotesResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Fan ID',
			name: 'fan_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The fan ID',
		},
		{
			displayName: 'The New Note Value',
			name: 'notes',
			type: 'string',
			default: 'Example note',
			required: true,
			description: 'The new note value',
		},
];

export const createEditFanNotesOperation = {
	name: 'createEditFanNotes',
	displayName: 'Create/Edit Fan Notes',
	method: 'PUT' as const,
	parameters: createEditFanNotesResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const clearFanNotesResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Fan ID',
			name: 'fan_id',
			type: 'string',
			default: '',
			required: true,
			description: 'The fan ID',
		},
];

export const clearFanNotesOperation = {
	name: 'clearFanNotes',
	displayName: 'Clear Fan Notes',
	method: 'DELETE' as const,
	parameters: clearFanNotesResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

