import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getMessageSettingsResource: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
		},
];

export const getMessageSettingsOperation = {
	name: 'getMessageSettings',
	displayName: 'Get Message Settings',
	method: 'GET' as const,
	parameters: getMessageSettingsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

