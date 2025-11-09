import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getDAC7FormDetailsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
];

export const getDAC7FormDetailsOperation = {
	name: 'getDAC7FormDetails',
	displayName: 'Get DAC7 Form Details',
	method: 'GET' as const,
	parameters: getDAC7FormDetailsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

