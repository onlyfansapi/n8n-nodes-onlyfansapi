import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const disconnectAccountResource: INodeProperties[] = [
		{
			displayName: 'The ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID',
		},
];

export const disconnectAccountOperation = {
	name: 'disconnectAccount',
	displayName: 'Disconnect Account',
	method: 'DELETE' as const,
	parameters: disconnectAccountResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

