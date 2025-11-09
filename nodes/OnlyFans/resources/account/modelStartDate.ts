import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getModelStartDateResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
];

export const getModelStartDateOperation = {
	name: 'getModelStartDate',
	displayName: 'Get Model Start Date',
	method: 'GET' as const,
	parameters: getModelStartDateResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

