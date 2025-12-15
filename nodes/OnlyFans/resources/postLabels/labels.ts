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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		description: 'Optional parameters when listing post labels',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'string',
				default: '10',
				description: 'Number of labels to return (default 10)',
			},
			{
				displayName: 'Offset',
				name: 'offset',
				type: 'string',
				default: '',
				description: 'Number of labels to skip for pagination',
			},
		],
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

