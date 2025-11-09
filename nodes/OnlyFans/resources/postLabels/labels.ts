import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const listLabelsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Number of Labels to Return (Default = 10)',
			name: 'limit',
			type: 'string',
			default: '10',
		},
		{
			displayName: 'Number of Labels to Skip for Pagination',
			name: 'offset',
			type: 'string',
			default: '',
		},
];

export const listLabelsOperation = {
	name: 'listLabels',
	displayName: 'List Labels',
	method: 'GET' as const,
	parameters: listLabelsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

export const createLabelResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'The Name of Your New Label',
			name: 'name',
			type: 'string',
			default: 'My new label',
			required: true,
			description: 'The name of your new label',
		},
];

export const createLabelOperation = {
	name: 'createLabel',
	displayName: 'Create Label',
	method: 'POST' as const,
	parameters: createLabelResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

