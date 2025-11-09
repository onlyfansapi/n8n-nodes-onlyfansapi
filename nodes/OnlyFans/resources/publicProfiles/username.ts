import type { INodeProperties, IDataObject } from 'n8n-workflow';

export const getProfileDetailsResource: INodeProperties[] = [
		{
			displayName: 'The Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'The username',
		},
];

export const getProfileDetailsOperation = {
	name: 'getProfileDetails',
	displayName: 'Get Profile Details',
	method: 'GET' as const,
	parameters: getProfileDetailsResource,
	processResponse: (responseData: unknown) => {
		if (responseData && typeof responseData === 'object' && 'data' in responseData) {
			const data = responseData.data;
			return Array.isArray(data) ? data as IDataObject[] : [data as IDataObject];
		}
		return Array.isArray(responseData) ? responseData as IDataObject[] : [responseData as IDataObject];
	}
};

